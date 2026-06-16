import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('contact_enquiries');

        switch (req.method) {
            case 'GET': {
                const enquiries = await collection.find({}).sort({ date: -1 }).toArray();
                return res.status(200).json(enquiries);
            }
            case 'POST': {
                const newEnquiry = {
                    ...req.body,
                    date: new Date().toISOString(),
                    isRead: false
                };
                const result = await collection.insertOne(newEnquiry);
                return res.status(201).json({ ...newEnquiry, _id: result.insertedId });
            }
            case 'PUT': {
                const { id, isRead } = req.body;
                if (!id) return res.status(400).json({ error: 'Missing enquiry ID' });
                await collection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { isRead } }
                );
                return res.status(200).json({ success: true });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) return res.status(400).json({ error: 'Missing enquiry ID query param' });
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
