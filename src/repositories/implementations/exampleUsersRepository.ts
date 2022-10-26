import User from '@entities/user';
import IUsersRepository from '@repositories/IUsersRepository';
import bcrypt from 'bcrypt';

// Fictitious repository

class ExampleUsersRepository implements IUsersRepository {
  private userRepo: User[] = [];

  async getUserById(id: string): Promise<User | undefined> {
    const findedUser = this.userRepo.filter((user) => user.getId() === id);
    return findedUser[0];
  }

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

  async getUsers(): Promise<User[]> {
    return this.userRepo;
  }

  async save(user: User): Promise<void> {
    this.userRepo.push(user);
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

  async addRefreshToken(userId: string, refreshToken: string): Promise<void> {
    const findedUser = this.userRepo.filter((user) => user.getId() === userId);
    const oldRefreshTokens = findedUser[0].getRefreshTokens();
    if (oldRefreshTokens !== undefined) {
      findedUser[0].setRefreshTokens([...oldRefreshTokens, refreshToken]);
      return;
    }
    findedUser[0].setRefreshTokens([refreshToken]);
  }

  async removeRefreshToken(refreshToken: string): Promise<void> {
    const findedUser = this.userRepo.filter((user) => {
      const indexUser = user.getRefreshTokens()?.includes(refreshToken);
      return indexUser;
    });
    if (findedUser[0]) {
      const allUserRefreshTokens = findedUser[0].getRefreshTokens();
      if (allUserRefreshTokens) {
        const index = allUserRefreshTokens.indexOf(refreshToken);
        // remove the founded index item
        allUserRefreshTokens.splice(index, 1);
        findedUser[0].setRefreshTokens(allUserRefreshTokens);
        return;
      }
      findedUser[0].setRefreshTokens([]);
    }
  }
}

export default ExampleUsersRepository;
