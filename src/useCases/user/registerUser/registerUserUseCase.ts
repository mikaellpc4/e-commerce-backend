import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';
import validateRegisterRequest from '@validations/validateRegisterRequest';
import IRegisterUserRequestDTO from './registerUserDTO';

export default class RegisterUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(
    next: Next,
    data: IRegisterUserRequestDTO,
  ): Promise<void> {
    if (await validateRegisterRequest(next, data)) {
      const newUser = new User({ ...data, role: 'USER' });
      await this.usersRepository.save(newUser);
    }
  }
}
