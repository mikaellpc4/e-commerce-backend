import usersRepository from '@config/repositories';

const isValid = {
  // Hegex logics
  email(email: string) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    // qualquercoisa@qualquercoisa.algo
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
    return usersRepository.emailExists(email);
  },
  async phone(phone: string) {
    return usersRepository.phoneExists(phone);
  },
  async cpf(cpf: string) {
    return usersRepository.cpfExists(cpf);
  },
};

export { isValid, exists };
