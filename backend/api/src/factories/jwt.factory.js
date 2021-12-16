import * as jwt from "jsonwebtoken";

export const generateToken = (payload, secret = process.env.JWT_SECRET) =>
  jwt.sign(payload, secret, {});

export const verifyToken = (token, secret = process.env.JWT_SECRET) =>
  jwt.verify(token, secret, {});
