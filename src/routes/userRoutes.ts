import { loginUserController } from '@useCases/user/loginUser';
import { registerUserController } from '@useCases/user/registerUser';
import usersRepository from '@config/repositories';
import express from 'express';
import bcrypt from 'bcrypt';
import isAuth from 'middlewares/isAuth';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.status(200).json({ message: 'Bem vindo a nossa API' }));

userRouter.post('/user/register', isAuth, async (req, res, next) => {
  await registerUserController.handle(req, res, next);
  if (res.headersSent === false) {
    return res.status(200).json({ message: 'Registrado com sucesso' });
  }
  return null;
});

userRouter.post('/user/login', isAuth, async (req, res, next) => {
  const refreshToken = await loginUserController.handle(req, next);
  if (res.headersSent === false) {
    return res.status(200).json({ message: 'Logado com sucesso', refreshToken });
  }
  return null;
});

userRouter.post('/private', isAuth, (req, res, next) => {
  res.status(200).json({ message: 'Bem vindo a rota privada' });
});

// Only for tests
userRouter.get('/user/get', async (req, res) => {
  const users = await usersRepository.getUsers();
  return res.status(200).json({ message: 'Usuarios', users });
});

export default userRouter;
