const { createUser, getUserById, getAllUsers } = require("../src/userService");

describe("createUser", () => {
  it("creates a user with capitalized name and lowercased email", () => {
    const user = createUser("alice", "Alice@Example.COM");
    expect(user.name).toBe("Alice");
    expect(user.email).toBe("alice@example.com");
    expect(user.id).toBeDefined();
  });

  it("throws when name is missing", () => {
    expect(() => createUser("", "a@b.com")).toThrow("Name and email are required");
  });

  it("throws when email is missing", () => {
    expect(() => createUser("Bob", "")).toThrow("Name and email are required");
  });
});

describe("getUserById", () => {
  it("returns null for unknown id", () => {
    expect(getUserById(9999)).toBeNull();
  });
});

describe("getAllUsers", () => {
  it("returns an array", () => {
    expect(Array.isArray(getAllUsers())).toBe(true);
  });
});
