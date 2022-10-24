import IRegisterUserRequestDTO from './registerUserDTO';
import RegisterUserUseCase from './registerUserUseCase';

export default class RegisterUserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
  ) { }

  async handle(req: Req, res: Res, next: Next): Promise<void> {
    const data: IRegisterUserRequestDTO = req.body;
    await this.registerUserUseCase.execute(next, data);
  }
}
