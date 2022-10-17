import ApiError from '@controllers/errorController';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.status(200).json({ message: 'Bem vindo a nossa API' }));

userRouter.get('/error', async (req, res, next) => {
  next(ApiError.internalError('Simulação de erro interno'));
  return null;
});

export default userRouter;
