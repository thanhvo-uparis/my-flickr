import { Router } from "express";
/** Routers */
import api from "./api";

const router = Router();

router.use("/api", api);

export default router;
