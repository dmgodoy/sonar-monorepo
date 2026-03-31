const { capitalize } = require("@sonar-monorepo/utils");

const users = [];

function createUser(name, email) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  const user = {
    id: users.length + 1,
    name: capitalize(name),
    email: email.toLowerCase(),
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  return user;
}

function getUserById(id) {
  return users.find((u) => u.id === id) || null;
}

function getAllUsers() {
  return [...users];
}

module.exports = { createUser, getUserById, getAllUsers };
