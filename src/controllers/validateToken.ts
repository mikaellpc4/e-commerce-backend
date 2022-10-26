import usersRepository from '@config/repositories';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const validateToken = {
  acess: (acessToken: string) => {
    const acessSecret = process.env.ACESS_SECRET as string;
    try {
      jwt.verify(acessToken, acessSecret);
      return true;
    } catch (e) {
      return false;
    }
  },
  refresh: async (refreshToken: string) => {
    const refreshSecret = process.env.REFRESH_SECRET as string;
    try {
      const tokenData = jwt.verify(refreshToken, refreshSecret) as { userId: string };
      const { userId } = tokenData;
      const findedUser = await usersRepository.getUserById(userId);
      if (findedUser) {
        return true;
      }
      throw new Error('revokedToken');
    } catch (e) {
      if (e instanceof Error && e.message === ('revokedToken')) {
        // Token not found in database
        return e.message;
      }
      if (e instanceof JsonWebTokenError) {
        if (e.name === 'TokenExpiredError') {
          // Token expired
          usersRepository.removeRefreshToken(refreshToken);
          return e.name;
        }
        if (e.name === 'JsonWebTokenError') {
          return e.name;
        }
      }
      return false;
    }
  },
};

export default validateToken;
