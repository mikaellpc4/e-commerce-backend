import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';
import IRegisterUserRequestDTO from './registerUserDTO';

export default class RegisterUserUseCase {
  constructor(
        private usersRepository: IUsersRepository,
  ) {}

  async execute(
    next:Next,
    data:IRegisterUserRequestDTO,
  ):Promise<void> {
    const newUser = new User({ ...data, role: 'USER' });
    await this.usersRepository.save(newUser);
  }
}
