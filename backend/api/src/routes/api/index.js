import { Router } from "express";
/** Routers */
import authentication from "./authentication";
import upload from "./upload";

const api = Router();

api.use("/authentication", authentication);
api.use("/upload", upload);

export default api;
