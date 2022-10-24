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
  }
}
