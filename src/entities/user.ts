import dayjs from 'dayjs';
import { v4 } from 'uuid';

interface UserProps {
  id?: string;
  name: string;
  cpf: string;
  phone: string;
  sex: Sex;
  birthday: string;
  email: string;
  password: string;
  refreshTokens?: string[];
  role?: Role;
  createdAt?: number;
  updatedAt?: number;
}

export default class User {
  private props: UserProps;

  constructor(props: UserProps) {
    // Se não possui ID se trata de um novo usuario
    if (!props.id) {
      // Utilizar formato de data Unix para maior compatibilidade entre varias DBs
      const today = dayjs().unix();
      const createdAt = today;
      const updatedAt = today;
      const finalProps = {
        // Criar o ID na propria API é recomendado no lugar de deixar a DB criar
        // Evita problemas em caso de troca de DB
        createdAt, updatedAt, ...props, id: v4(),
      };
      this.props = finalProps;
      return;
    }
    this.props = props;
  }

  getId() {
    return this.props.id;
  }

  getName() {
    return this.props.name;
  }

  getCpf() {
    return this.props.cpf;
  }

  getPhone() {
    return this.props.phone;
  }

  getEmail() {
    return this.props.email;
  }

  getPassword() {
    return this.props.password;
  }

  getRole() {
    return this.props.role;
  }

  getRefreshTokens() {
    return this.props.refreshTokens;
  }

  setRefreshTokens(refreshTokens: string[]) {
    this.props.refreshTokens = refreshTokens;
  }

  // updateData(newData: userProps):void {

  // }
}
