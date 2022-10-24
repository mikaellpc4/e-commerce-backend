import usersRepository from '@config/repositories';
import LoginUserController from './loginUserController';
import LoginUserUseCase from './loginUserUseCase';

const repository = usersRepository;

const loginUserUseCase = new LoginUserUseCase(repository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserUseCase, loginUserController };
