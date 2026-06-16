import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable in .env');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    // Connect the MongoClient
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db('ethnotech');

    cachedClient = client;
    cachedDb = db;
    return { client, db };
}
