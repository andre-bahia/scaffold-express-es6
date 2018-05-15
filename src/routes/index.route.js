import express from 'express';
import indexController from '../controllers/index.controller'

let router = express.Router();
let api = {
    "name": "Scaffold api express es6",
    "message": "Welcome to api express es6",
    "version": "0.0.1"
};

router.get('/', (req, res) => {
    res.json(api);
});

router.get('/home', (req, res) => {
    indexController.getAll(req, res);
});

export default router;