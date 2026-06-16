/**
 * CORS handling helper for Vercel Serverless Functions
 * Configures headers and responds to preflight OPTIONS requests.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {boolean} True if the request was an OPTIONS preflight (and has been ended), false otherwise.
 */
export function runCors(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Set origin dynamically to the request origin if present, or fallback to wildcard
    const origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    // Preflight request handler
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return true;
    }
    
    return false;
}
