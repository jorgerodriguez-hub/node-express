import express from "express";
import morgan from "morgan";
import cors from "cors";
import clientRoutes from "./routes/clientes.routes";

// swagger
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Reto Técnico API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./src/routes/clientes.routes.ts"],
};

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(clientRoutes);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(swaggerSpec))
);

export default app;
