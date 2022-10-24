import ILoginUserRequestDTO from './loginUserDTO';
import LoginUserUseCase from './loginUserUseCase';

export default class LoginUserController {
  constructor(
    private loginUserUseCase: LoginUserUseCase,
  ) { }

  async handle(req: Req, next: Next): Promise<void> {
    const data: ILoginUserRequestDTO = req.body;
    await this.loginUserUseCase.execute(next, data);
  }
}
