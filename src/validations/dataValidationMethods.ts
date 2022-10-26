import usersRepository from '@config/repositories';

const isValid = {
  // Hegex logics
  email(email: string) {
    const valid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    return valid;
    // qual-quer-co.i.sa@qual-quer-co.i.sa.algo
  },
  phone(phone: string) {
    return /^\([1-9]{2}\) 9[1-9][0-9]{3}-[0-9]{4}$/.test(phone);
    // (11) 91111-1111
  },
  cpf(cpf: string) {
    return /^([0-9]{3}[.]){2}[0-9]{3}-[0-9]{2}$/.test(cpf);
    // 111.111.111-11
  },
  birthday(birthday: string) {
    return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/.test(birthday);
    // 01-31/01-12/1900-2099
  },
};

const exists = {
  async email(email: string) {
    if (await usersRepository.getUserByEmail(email) !== undefined) {
      return true;
    }
    return false;
  },
  async phone(phone: string) {
    if (await usersRepository.getUserByPhone(phone) !== undefined) {
      return true;
    }
    return false;
  },
  async cpf(cpf: string) {
    if (await usersRepository.getUserByCpf(cpf) !== undefined) {
      return true;
    }
    return false;
  },
};

export { isValid, exists };
