import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_PLACEMENT_PARTNERS } from './lib/defaults.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('placement_partners');

        // Seed if empty
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(DEFAULT_PLACEMENT_PARTNERS);
        }

        switch (req.method) {
            case 'GET': {
                const partners = await collection.find({}).toArray();
                return res.status(200).json(partners);
            }
            case 'POST': {
                const newPartner = req.body;
                const result = await collection.insertOne(newPartner);
                return res.status(201).json({ ...newPartner, _id: result.insertedId });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) return res.status(400).json({ error: 'Missing partner ID query param' });
                await collection.deleteOne({ _id: new ObjectId(id) });
                return res.status(200).json({ success: true });
            }
            default:
                res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
                return res.status(405).json({ error: `Method ${req.method} not allowed` });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Database error occurred' });
    }
}
