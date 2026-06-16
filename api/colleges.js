import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_EDUCATIONAL_PARTNERS } from './lib/defaults.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('educational_partners');

        // Seed if empty
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(DEFAULT_EDUCATIONAL_PARTNERS);
        }

        switch (req.method) {
            case 'GET': {
                const colleges = await collection.find({}).toArray();
                return res.status(200).json(colleges);
            }
            case 'POST': {
                const newCollege = req.body;
                const result = await collection.insertOne(newCollege);
                return res.status(201).json({ ...newCollege, _id: result.insertedId });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) return res.status(400).json({ error: 'Missing college ID query param' });
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
