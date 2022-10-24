import { loginUserController } from 'useCases/user/loginUser';
import { registerUserController } from 'useCases/user/registerUser';
import usersRepository from '@config/repositories';
import express from 'express';

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
  await loginUserController.handle(req, next);
  if (res.headersSent === false) {
    return res.status(200).json({ message: 'Logado com sucesso' });
  }
  return null;
});

// Only for tests
userRouter.get('/user/get', async (req, res) => {
  const users = await usersRepository.getUsers();
  return res.status(200).json({ message: 'Usuarios', users });
});

export default userRouter;
