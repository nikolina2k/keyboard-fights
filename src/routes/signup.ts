import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function post(req: Request, res: Response) {
  const { username, email, password } = req.body;

  // TODO: Validate username, email and password

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // TODO: Store the email and hashed password in a database
  
  res.end('Signup successful!');
}
