import express from "express";
import cors from "cors";
import routes from "./routes";

export function launch({ protocol, host, port }) {
  const application = express();

  /** Middlewares */
  application.use(cors());
  application.use(express.json());

  /** Routes */
  application.use(routes);
  application.use("/uploads", express.static("./uploads"));

  application.listen(
    port,
    () => console.log(`API ready at ${protocol}://${host}:${port}`),
  );
}
