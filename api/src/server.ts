import express from "express";
import { router } from "./routes";

import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());
app.use(router);

// Configurando o swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running..."));