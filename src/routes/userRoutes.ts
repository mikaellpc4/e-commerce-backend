import { loginUserController } from 'useCases/user/loginUser';
import { registerUserController } from 'useCases/user/registerUser';
import usersRepository from '@config/repositories';
import express from 'express';
import bcrypt from 'bcrypt';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.status(200).json({ message: 'Bem vindo a nossa API' }));

userRouter.post('/user/register', async (req, res, next) => {
  await registerUserController.handle(req, res, next);
  if (res.headersSent === false) {
    return res.status(200).json({ message: 'Registrado com sucesso' });
  }
  return null;
});

userRouter.post('/user/login', async (req, res, next) => {
  const refreshToken = await loginUserController.handle(req, next);
  if (res.headersSent === false) {
    return res.status(200).json({ message: 'Logado com sucesso', refreshToken });
  }
  return null;
});

// Only for tests
userRouter.get('/user/get', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const users = await usersRepository.getUsers();
  return res.status(200).json({ message: 'Usuarios', users });
});

export default userRouter;
