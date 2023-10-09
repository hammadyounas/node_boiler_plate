import * as dotenv from 'dotenv';
dotenv.config();
export const PORT: number = parseInt(process.env.PORT as string, 10) || 9000;
export const MONGO_URI: string =
  process.env.MONGO_URI ||
  '';

  export const BCRYPT_SALT: string = process.env.BCRYPT_SALT || '10';