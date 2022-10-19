import usersRepository from '@config/repositories';
import ApiError from '@controllers/errorController';
import express from 'express';
import { registerUserController } from 'useCases/user/registerUser';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.status(200).json({ message: 'Bem vindo a nossa API' }));

userRouter.get('/error', async (req, res, next) => {
  next(ApiError.internalError('Simulação de erro interno'));
  return null;
});

userRouter.post('/user/register', async (req, res, next) => {
  await registerUserController.handle(req, res, next);
  return res.status(200).json({ message: 'Registrado com sucesso' });
});

userRouter.get('/user/get', async (req, res, next) => {
  const users = await usersRepository.getUsers();
  return res.status(200).json({ message: 'Usuarios', users });
});

export default userRouter;
