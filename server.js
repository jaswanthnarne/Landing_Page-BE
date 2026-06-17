import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Import API handlers
import authHandler from './api/auth.js';
import heroHandler from './api/hero.js';
import coursesHandler from './api/courses.js';
import labsHandler from './api/labs.js';
import partnersHandler from './api/partners.js';
import collegesHandler from './api/colleges.js';
import careersHandler from './api/careers.js';
import applicationsHandler from './api/applications.js';
import enquiriesHandler from './api/enquiries.js';
import imagesHandler from './api/images.js';
import lakshyaHandler from './api/lakshya.js';
import galleryHandler from './api/gallery.js';
import navbarHandler from './api/navbar.js';
import placementsHandler from './api/placements.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Log incoming requests for debugging
app.use((req, res, next) => {
    console.log(`[API] ${req.method} ${req.path}`);
    next();
});

// Map routes
app.all('/api/auth', authHandler);
app.all('/api/hero', heroHandler);
app.all('/api/courses', coursesHandler);
app.all('/api/labs', labsHandler);
app.all('/api/partners', partnersHandler);
app.all('/api/colleges', collegesHandler);
app.all('/api/careers', careersHandler);
app.all('/api/applications', applicationsHandler);
app.all('/api/enquiries', enquiriesHandler);
app.all('/api/images', imagesHandler);
app.all('/api/lakshya', lakshyaHandler);
app.all('/api/gallery', galleryHandler);
app.all('/api/navbar', navbarHandler);
app.all('/api/placements', placementsHandler);


// Start server
app.listen(PORT, () => {
    console.log(`Local development API server running on http://localhost:${PORT}`);
});
