import ILoginUserRequestDTO from './loginUserDTO';
import LoginUserUseCase from './loginUserUseCase';

export default class LoginUserController {
  constructor(
    private loginUserUseCase: LoginUserUseCase,
  ) { }

  async handle(req: Req, next: Next): Promise<string | null> {
    const data: ILoginUserRequestDTO = req.body;
    return this.loginUserUseCase.execute(next, data);
  }
}
