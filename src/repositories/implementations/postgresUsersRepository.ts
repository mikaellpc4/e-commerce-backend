import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';

class PostgresUsersRepository implements IUsersRepository {
  emailExists(email: string): Promise<boolean> {

  }

  cpfExists(cpf: string): Promise<boolean> {

  }

  phoneExists(phone: string): Promise<boolean> {

  }

  async save(user: User): Promise<void> {

  }
}

export default PostgresUsersRepository;
