import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export async function post(req: Request, res: Response) {
  const {username, password } = req.body;

  // TODO: Validate username and password

  // TODO: Retrieve the hashed password from the database based on the email
  const hashedPassword = '';

  // Compare the password with the hashed password
  const passwordMatch = await bcrypt.compare(password, hashedPassword);

  if (passwordMatch) {
    // TODO: Set a session cookie to indicate that the user is signed in
    res.end('Signin successful!');
  } else {
    res.end('Invalid email or password');
  }
}