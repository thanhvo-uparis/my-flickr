import { Router } from "express";
/** Middlewares */
import jwt from "../../middlewares/jwt.middleware";
/** DAO */
import * as UploadDAO from "../../models/upload.dao";

const api = Router();

api.get("/", async (request, response) => {
  try {
    response.json({
      data: {
        uploads: await UploadDAO.findAll(),
      },
    });
  } catch(error) {
    response.status(500).json({
      error: {
        message: "unknown error.",
      },
    });
  }
});

api.post("/", jwt, async (request, response) => {
  const { file, tags } = request.body;

  try {
    const uploadedFile = await UploadDAO.upload(file);

    const { PROTOCOL, HOST, PORT } = process.env;
    await UploadDAO.createOne({
      ...uploadedFile,
      author: request.user.username,
      url: `${PROTOCOL}://${HOST}:${PORT}/uploads/${uploadedFile.name}`,
      tags,
    });

    response.status(201).end();
  } catch(error) {
    console.log(error)
    response.status(500).json({
      error: {
        message: "unknown error.",
      },
    });
  }
});

api.get("/search", async ({ body }, response) => {
  try {
    const { tags } = body;
    const files = await UploadDAO.findAllByTags(tags);

    response.json({
      data: { files },
    });
  } catch(error) {
    response.status(500).json({
      error: {
        message: "unknown error.",
      },
    });
  }
});

export default api;
