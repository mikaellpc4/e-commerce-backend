import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';

// Fictitious repository

const userRepo:User[] = [];

class ExampleUsersRepository implements IUsersRepository {
  emailExists(email: string): Promise<boolean> {

  }

  cpfExists(cpf: string): Promise<boolean> {

  }

  phoneExists(phone: string): Promise<boolean> {

  }

  async save(user: User): Promise<void> {
    userRepo.push(user);
  }

  async getUsers(): Promise<User[]> {
    return userRepo;
  }
}

export default ExampleUsersRepository;
