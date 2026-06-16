import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_GALLERY_CATEGORIES } from './lib/defaults.js';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('gallery_config');

        // Check if config exists, if not, seed it
        const doc = await collection.findOne({ _id: 'gallery_singleton' });
        if (!doc) {
            await collection.insertOne({ _id: 'gallery_singleton', categories: DEFAULT_GALLERY_CATEGORIES });
        }

        switch (req.method) {
            case 'GET': {
                const currentConfig = await collection.findOne({ _id: 'gallery_singleton' });
                return res.status(200).json(currentConfig);
            }
            case 'PUT': {
                const updatedConfig = req.body;
                delete updatedConfig._id; // Prevent modifying immutable _id
                await collection.updateOne(
                    { _id: 'gallery_singleton' },
                    { $set: updatedConfig },
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
