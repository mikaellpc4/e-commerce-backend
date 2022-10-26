import ApiError from '@controllers/errorController';
import IUsersRepository from '@repositories/IUsersRepository';
import validateLoginRequest from '@validations/validateLoginRequest';
import ILoginRequestDTO from './loginUserDTO';

export default class LoginUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(
    next: Next,
    data: ILoginRequestDTO,
  ) {
    await validateLoginRequest(next, data);
    const {
      login,
      password,
    } = data;
    const loggedUser = await this.usersRepository.login(login, password);
    if (loggedUser === null) {
      next(ApiError.badRequest('Email ou senha incorreto(os)'));
    }
  }
}
