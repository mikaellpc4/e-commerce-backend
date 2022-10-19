interface IRegisterUserRequestDTO {
    name: string,
    cpf: string,
    phone: string,
    sex: Sex,
    birthday: string,
    email: string,
    password: string,
    passwordConfirm: string
}

export default IRegisterUserRequestDTO;
