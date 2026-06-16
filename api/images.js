import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_PAGE_IMAGES } from './lib/defaults.js';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('page_images');

        // Check if collection is empty, if so, seed it
        const count = await collection.countDocuments();
        if (count === 0) {
            const docs = Object.entries(DEFAULT_PAGE_IMAGES).map(([key, url]) => ({ key, url }));
            await collection.insertMany(docs);
        }

        switch (req.method) {
            case 'GET': {
                const items = await collection.find({}).toArray();
                const pageImages = {};
                items.forEach(item => {
                    pageImages[item.key] = item.url;
                });
                return res.status(200).json(pageImages);
            }
            case 'PUT': {
                const { key, url } = req.body;
                if (!key) return res.status(400).json({ error: 'Missing key' });
                // We allow url to be empty if they want to clear it, but usually it will be a string.
                await collection.updateOne(
                    { key },
                    { $set: { url: url || '' } },
                    { upsert: true }
                );
                return res.status(200).json({ success: true });
            }
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                return res.status(405).json({ error: `Method ${req.method} not allowed` });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Database error occurred' });
    }
}
