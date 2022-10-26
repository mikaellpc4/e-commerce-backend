import User from '@entities/user';

interface IUsersRepository {
  // delete(email: string): Promise<void>
  // GetUser
  getUserById(id: string): Promise<User | undefined>
  getUserByEmail(email: string): Promise<User | undefined>
  getUserByCpf(cpf: string): Promise<User | undefined>
  getUserByPhone(phone: string): Promise<User | undefined>
  getUsers(): Promise<User[]>

  // Credentials
  save(user: User): Promise<void>
  login(login: string, password: string): Promise<User | null>

  // Tokens
  addRefreshToken(userId: string, refreshToken: string): Promise<void>
  removeRefreshToken(efreshToken: string): Promise<void>
}

export default IUsersRepository;
