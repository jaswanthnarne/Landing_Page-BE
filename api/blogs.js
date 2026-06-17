import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_BLOGS } from './lib/defaults_blogs.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('blogs');

        // Automatic Seeding of the 10 defaults if collection is empty
        const count = await collection.countDocuments();
        if (count === 0) {
            console.log('Seeding 10 default blog posts to database...');
            await collection.insertMany(DEFAULT_BLOGS);
        }

        switch (req.method) {
            case 'GET': {
                const { slug, id } = req.query;
                if (id) {
                    const blog = await collection.findOne({ _id: new ObjectId(id) });
                    return res.status(200).json(blog);
                }
                if (slug) {
                    const blog = await collection.findOne({ slug });
                    return res.status(200).json(blog);
                }
                // Return all blogs
                const blogs = await collection.find({}).toArray();
                return res.status(200).json(blogs);
            }
            case 'POST': {
                const newBlog = req.body;
                if (!newBlog.title || !newBlog.content) {
                    return res.status(400).json({ error: 'Title and content are required' });
                }
                
                // Helper to generate clean URL slug
                if (!newBlog.slug) {
                    newBlog.slug = newBlog.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)+/g, '');
                }

                // Check duplicate slug
                const existing = await collection.findOne({ slug: newBlog.slug });
                if (existing) {
                    newBlog.slug = `${newBlog.slug}-${Date.now().toString().slice(-4)}`;
                }

                if (!newBlog.date) {
                    newBlog.date = new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                }
                if (!newBlog.readTime) {
                    newBlog.readTime = '5 min read';
                }
                if (!newBlog.author) {
                    newBlog.author = 'Academic Board, Ethnotech';
                }
                if (!newBlog.coverImage) {
                    newBlog.coverImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';
                }

                const result = await collection.insertOne(newBlog);
                return res.status(201).json({ success: true, id: result.insertedId, blog: newBlog });
            }
            case 'PUT': {
                const { id } = req.query;
                if (!id) {
                    return res.status(400).json({ error: 'Blog ID is required for updates' });
                }
                const updatedBlog = req.body;
                const updateId = new ObjectId(id);
                delete updatedBlog._id; // prevent immutable ID errors

                await collection.updateOne(
                    { _id: updateId },
                    { $set: updatedBlog }
                );
                return res.status(200).json({ success: true });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) {
                    return res.status(400).json({ error: 'Blog ID is required for deletion' });
                }
                await collection.deleteOne({ _id: new ObjectId(id) });
                return res.status(200).json({ success: true });
            }
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                return res.status(405).json({ error: `Method ${req.method} not allowed` });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Database error occurred' });
    }
}
