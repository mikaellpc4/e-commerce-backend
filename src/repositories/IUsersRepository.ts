import User from '@entities/user';

interface IUsersRepository{
    // passwordIsCorreect(login:string, password: string): Promise<boolean>
    // getUser(email: string): Promise<User|null>
    // delete(email: string): Promise<void>
    emailExists(email: string): Promise<boolean>
    cpfExists(cpf: string): Promise<boolean>
    phoneExists(phone: string): Promise<boolean>
    save(user: User): Promise<void>
    getUsers(): Promise<User[]>
}

export default IUsersRepository;
