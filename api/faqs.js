import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_FAQS } from './lib/defaults_faqs.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('faqs');

        // Automatic Seeding of default FAQs if collection is empty
        const count = await collection.countDocuments();
        if (count === 0) {
            console.log('Seeding default FAQs to database...');
            await collection.insertMany(DEFAULT_FAQS);
        }

        switch (req.method) {
            case 'GET': {
                const faqs = await collection.find({}).sort({ order: 1 }).toArray();
                return res.status(200).json(faqs);
            }
            case 'POST': {
                const newFaq = req.body;
                if (!newFaq.question || !newFaq.answer) {
                    return res.status(400).json({ error: 'Question and answer are required' });
                }
                if (!newFaq.category) {
                    newFaq.category = 'General';
                }
                if (newFaq.order === undefined) {
                    const lastFaq = await collection.find({}).sort({ order: -1 }).limit(1).toArray();
                    newFaq.order = lastFaq.length > 0 ? (lastFaq[0].order || 0) + 1 : 0;
                }
                const result = await collection.insertOne(newFaq);
                return res.status(201).json({ success: true, id: result.insertedId, faq: { ...newFaq, _id: result.insertedId } });
            }
            case 'PUT': {
                const { id } = req.query;
                if (!id) {
                    return res.status(400).json({ error: 'FAQ ID is required for updates' });
                }
                const updatedFaq = req.body;
                const updateId = new ObjectId(id);
                delete updatedFaq._id;

                await collection.updateOne(
                    { _id: updateId },
                    { $set: updatedFaq }
                );
                return res.status(200).json({ success: true });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) {
                    return res.status(400).json({ error: 'FAQ ID is required for deletion' });
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
