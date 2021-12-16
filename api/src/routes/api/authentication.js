import { Router } from "express";
import * as UserDAO from "../../models/user.dao";
import { generateToken } from "../../factories/jwt.factory";

const api = Router();

api.post("/login", async ({ body }, response) => {
  const { username, password } = body;

  try {
    const user = await UserDAO.login(username, password);

    if (!user) {
      return response
        .status(401)
        .json({
          error: {
            message: "wrong credentials.",
          },
        });
    }

    response.json({
      data: {
        token: await generateToken({ id: user.id, username: user.username }),
        user,
      },
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error: {
        message: "unknown error",
      },
    });
  }
});

export default api;
