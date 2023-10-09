import * as dotenv from 'dotenv';
dotenv.config();
export const PORT: number = parseInt(process.env.PORT as string, 10) || 9000;
export const MONGO_URI: string =
  process.env.MONGO_URI ||
  'mongodb+srv://tabishansari183:tZDIegXn2yxQN663@todo.6sx33vz.mongodb.net';

  export const BCRYPT_SALT: string = process.env.BCRYPT_SALT || '10';