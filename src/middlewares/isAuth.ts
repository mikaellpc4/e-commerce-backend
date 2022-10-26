import generateToken from '@controllers/generateToken';
import validateToken from '@controllers/validateToken';

const isAuth = async (req: Req, res: Res, next: Next) => {
  const acessToken = req.headers.acesstoken as string;
  const refreshToken = req.headers.refreshtoken as string;
  // if no token, user not previous logged in
  if (acessToken || refreshToken) {
    const validAcess = validateToken.acess(acessToken);
    const validRefresh = await validateToken.refresh(refreshToken);
    if (validAcess === true) {
      return next();
    }
    switch (validRefresh) {
      case true: {
        const newAcessToken = generateToken.acess(refreshToken);
        return res.status(202).json({ newAcessToken });
      }
      case 'revokedToken': {
        return res.status(400).json({ message: 'Sessão encerrada' });
      }
      case 'TokenExpiredError': {
        return res.status(400).json({ message: 'Sessão expirada' });
      }
      case 'JsonWebTokenError': {
        return res.status(400).json({ message: 'Refresh token invalido' });
      }
      default: {
        return res.status(400).json({ message: 'Usuario não autenticado' });
      }
    }
  }
  return next();
};

export default isAuth;
