import ExampleUsersRepository from '@repositories/implementations/exampleUsersRepository';
import PostgresUsersRepository from '@repositories/implementations/postgresUsersRepository';

// const usersRepository = new PostgresUsersRepository();
const usersRepository = new ExampleUsersRepository();

export default usersRepository;
