import usersRepository from '@config/repositories';
import RegisterUserController from './registerUserController';
import RegisterUserUseCase from './registerUserUseCase';

const registerUserUseCase = new RegisterUserUseCase(usersRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);

export { registerUserUseCase, registerUserController };
