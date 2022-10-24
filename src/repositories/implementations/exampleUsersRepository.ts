import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';

// Fictitious repository

class ExampleUsersRepository implements IUsersRepository {
  private userRepo: User[] = [];

  async emailExists(email: string): Promise<boolean> {
    const findedUser = this.userRepo.find((user) => user.getEmail() === email);
    if (findedUser) {
      return true;
    }
    return false;
  }

  async cpfExists(cpf: string): Promise<boolean> {
    const findedUser = this.userRepo.find((user) => user.getCpf() === cpf);
    if (findedUser) {
      return true;
    }
    return false;
  }

  async phoneExists(phone: string): Promise<boolean> {
    const findedUser = this.userRepo.find((user) => user.getPhone() === phone);
    if (findedUser) {
      return true;
    }
    return false;
  }

  async save(user: User): Promise<void> {
    this.userRepo.push(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepo;
  }
}

export default ExampleUsersRepository;
