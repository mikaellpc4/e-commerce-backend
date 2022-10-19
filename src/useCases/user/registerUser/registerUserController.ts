import validateRegisterRequest from '@validations/validateRegisterRequest';
import IRegisterUserRequestDTO from './registerUserDTO';
import RegisterUserUseCase from './registerUserUseCase';

export default class RegisterUserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
  ) { }

  async handle(req: Req, res: Res, next: Next): Promise<void> {
    const data: IRegisterUserRequestDTO = req.body;
    if (await validateRegisterRequest(next, data)) {
      await this.registerUserUseCase.execute(next, data);
    }
  }
}
