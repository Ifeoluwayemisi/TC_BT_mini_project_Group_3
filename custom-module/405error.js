// Example of 405error.js
import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send('method is allowed');
});


router.all('/', (req, res) => {
    res.status(405).send('Access not granted');
});

export default router;
