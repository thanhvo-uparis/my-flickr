import fs from "fs/promises";
import path from "path";

export const findAll = async () => {
  const usersPath = path.join(
    process.cwd(),
    "database",
    "users.json",
  );

  return JSON.parse(
    await fs.readFile(usersPath, "utf-8"),
  );
}

export const login = async (username, password) => {
  const users = await findAll();

  return users.find(
    (user) => user.username === username && user.password === password,
  );
}
