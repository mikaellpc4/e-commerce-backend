import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';
import validateRegisterRequest from '@validations/validateRegisterRequest';
import bcrypt from 'bcrypt';
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
      const {
        name,
        cpf,
        phone,
        sex,
        birthday,
        email,
        password,
      } = data;
      // Use bcrypt to hash the password
      // bcrypt.hash is async so a await is necessary
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        cpf,
        phone,
        sex,
        birthday,
        email,
        password: hashedPassword,
        role: 'USER',
      });
      await this.usersRepository.save(newUser);
    }
  }
}
