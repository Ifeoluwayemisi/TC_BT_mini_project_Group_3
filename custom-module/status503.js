
// custom-module/status503.js

import express from 'express';
const router = express.Router();


let isServiceAvailable = false;

// Route to simulate service availability
router.get('/', (req, res) => {
    if (isServiceAvailable) {
        res.status(200).send('Service is available');
    } else {
        res.status(503).send('Service is unavailable');
    }
});

export default router;
