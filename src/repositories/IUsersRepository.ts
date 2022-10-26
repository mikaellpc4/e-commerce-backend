import User from '@entities/user';

interface IUsersRepository {
  // passwordIsCorreect(login:string, password: string): Promise<boolean>
  // getUser(email: string): Promise<User|null>
  // delete(email: string): Promise<void>
  getUserByEmail(email: string): Promise<User | undefined>
  getUserByCpf(cpf: string): Promise<User | undefined>
  getUserByPhone(phone: string): Promise<User | undefined>
  save(user: User): Promise<void>
  getUsers(): Promise<User[]>
  login(login: string, password: string): Promise<User | null>
}

export default IUsersRepository;
