import { runCors } from './lib/cors.js';
export default async function handler(req, res) {
    if (runCors(req, res)) return;
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { email, password } = req.body;
    if (email === 'admin@ethnotech.com' && password === 'Eth@dm!n56') {
        return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false, error: 'Invalid admin credentials' });
}
