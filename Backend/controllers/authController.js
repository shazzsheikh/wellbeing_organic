import {
  createUser,
  findUserByEmail
} from '../models/userModel.js';

// NOTE: This is a very basic auth just for structure.
// Passwords are plain text here – DO NOT USE in real production apps.

export const registerController = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and password are required'
    });
  }

  const existing = findUserByEmail(email);
  if (existing) {
    return res.status(409).json({
      success: false,
      message: 'User already exists with this email'
    });
  }

  const user = createUser({ name, email, password });

  return res.status(201).json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

export const loginController = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const user = findUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // No JWT for now – just send basic user info back
  return res.json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

export default {
  registerController,
  loginController
};


