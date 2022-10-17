import express from 'express';

const admRouter = express.Router();

admRouter.get('/adm', (req, res) => res.status(200).json({ message: 'adm routes' }));

export default admRouter;
