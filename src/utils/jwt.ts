import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as Secret;

export const signToken = (payload: object, expiresIn: string = '7d') => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn
  } as SignOptions);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};