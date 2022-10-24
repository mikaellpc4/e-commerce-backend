import ApiError from '@controllers/errorController';
import ILoginUserRequestDTO from 'useCases/user/loginUser/loginUserDTO';
import { exists, isValid } from './dataValidationMethods';
import validateTypes from './validateTypes';

const validateLoginRequest = async (
  next: Next,
  data: ILoginUserRequestDTO,
) => {
  const {
    login,
    password,
  } = data;

  const validRequest = {
    login: 'string',
    password: 'string',
  };

  if (validateTypes(data, validRequest) === false) {
    next(ApiError.badRequest('Dados invalidos'));
    return false;
  }

  if (login === '') {
    next(ApiError.badRequest('O login é obrigatorio'));
    return false;
  }

  if (password === '') {
    next(ApiError.badRequest('A senha é obrigatoria'));
    return false;
  }

  if (isValid.email(login) === false) {
    next(ApiError.badRequest('O email não é valido'));
    return false;
  }

  if (await exists.email(login) === false) {
    next(ApiError.badRequest('Email ou senha incorreto(os)'));
    return false;
  }

  return true;
};

export default validateLoginRequest;
