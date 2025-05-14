import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(500).send('Internal Server Error');
});

export default router;