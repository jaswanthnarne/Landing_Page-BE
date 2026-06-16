import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('job_applications');

        switch (req.method) {
            case 'GET': {
                const applications = await collection.find({}).sort({ date: -1 }).toArray();
                return res.status(200).json(applications);
            }
            case 'POST': {
                const newApplication = {
                    ...req.body,
                    date: new Date().toISOString()
                };
                const result = await collection.insertOne(newApplication);
                return res.status(201).json({ ...newApplication, _id: result.insertedId });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) return res.status(400).json({ error: 'Missing application ID query param' });
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
