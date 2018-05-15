import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    console.log('index');
    res.send("Route index");
});

export default router;