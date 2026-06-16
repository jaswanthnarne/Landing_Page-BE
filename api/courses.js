import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';
import { DEFAULT_DEPT_COURSES } from './lib/defaults.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('dept_courses');

        // Seed if empty
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(DEFAULT_DEPT_COURSES);
        }

        switch (req.method) {
            case 'GET': {
                const depts = await collection.find({}).toArray();
                return res.status(200).json(depts);
            }
            case 'POST': {
                const newDept = { ...req.body, courses: req.body.courses || [] };
                const result = await collection.insertOne(newDept);
                return res.status(201).json({ ...newDept, _id: result.insertedId });
            }
            case 'PUT': {
                const { _id, ...updatedData } = req.body;
                if (!_id) return res.status(400).json({ error: 'Missing department ID' });
                await collection.updateOne(
                    { _id: new ObjectId(_id) },
                    { $set: updatedData }
                );
                return res.status(200).json({ success: true });
            }
            case 'DELETE': {
                const { id } = req.query;
                if (!id) return res.status(400).json({ error: 'Missing department ID query param' });
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
