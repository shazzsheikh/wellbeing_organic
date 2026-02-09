// Simple in-memory User model (replace with real DB + hashing later)

let users = [];
let currentUserId = 1;

export const createUser = (data) => {
  const user = {
    id: currentUserId++,
    name: data.name,
    email: data.email,
    // NOTE: Do NOT store plain passwords in real apps.
    password: data.password,
    role: data.role || 'user',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  users.push(user);
  return user;
};

export const findUserByEmail = (email) =>
  users.find((u) => u.email === email) || null;

export const getUserById = (id) =>
  users.find((u) => u.id === Number(id)) || null;

export const resetUsers = () => {
  users = [];
  currentUserId = 1;
};

export default {
  createUser,
  findUserByEmail,
  getUserById,
  resetUsers
};


