import User from '@entities/user';
import jwt from 'jsonwebtoken';

const generateToken = {
  refresh: (user: User) => {
    const refreshSecret = process.env.REFRESH_SECRET as string;
    const userId = user.getId();
    const userRole = user.getRole();
    const tokenPayload = { userId, userRole };
    const tokenOptions = {
      expiresIn: '7d',
    };
    const refreshToken = jwt.sign(tokenPayload, refreshSecret, tokenOptions);
    return refreshToken;
  },
  acess: (refreshToken: string) => {
    const refreshSecret = process.env.REFRESH_SECRET as string;
    const tokenData = jwt.verify(refreshToken, refreshSecret) as {
      userId: string,
      userRole: Role
    };
    const acessSecret = process.env.ACESS_SECRET as string;
    const { userId, userRole } = tokenData;
    const tokenPayload = { userId, userRole };
    const tokenOptions = {
      expiresIn: '5m',
    };
    const acessToken = jwt.sign(tokenPayload, acessSecret, tokenOptions);
    return acessToken;
  },
};

export default generateToken;
