import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';
import bcrypt from 'bcrypt';

// Fictitious repository

class ExampleUsersRepository implements IUsersRepository {
  private userRepo: User[] = [];

  async getUserByEmail(email: string): Promise<User | undefined> {
    const findedUser = this.userRepo.filter((user) => user.getEmail() === email);
    return findedUser[0];
  }

  async getUserByCpf(cpf: string): Promise<User | undefined> {
    const findedUser = this.userRepo.filter((user) => user.getCpf() === cpf);
    return findedUser[0];
  }

  async getUserByPhone(phone: string): Promise<User | undefined> {
    const findedUser = this.userRepo.filter((user) => user.getPhone() === phone);
    return findedUser[0];
  }

  async save(user: User): Promise<void> {
    this.userRepo.push(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepo;
  }

  async login(login: string, password: string): Promise<User | null> {
    const findedUser = await this.getUserByEmail(login);
    if (findedUser instanceof User) {
      const userPassword = findedUser.getPassword();
      const passwordMatches = await bcrypt.compare(password, userPassword);
      if (passwordMatches === true) {
        return findedUser;
      }
    }
    return null;
  }
}

export default ExampleUsersRepository;
