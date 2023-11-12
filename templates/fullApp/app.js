import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import winston from "winston";
import cors from "cors";
import fetch from "node-fetch";

import commonResponse from "./helper/commonResponse";
import indexRouter from "./routes/index";
import { mongodb } from "./helper";

global.logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf((info) => `${info.timestamp} [${info.level}] : ${info.message}`)
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      name: "file.info",
      filename: "./logs/info.log",
      level: "info",
      maxsize: 1024 * 1024 * 1, // Bytes
      maxFiles: 5,
    }),
    new winston.transports.File({
      name: "file.error",
      filename: "./logs/error.log",
      level: "error",
      maxsize: 1024 * 1024 * 1, // Bytes
      maxFiles: 5,
    }),
  ],
});

const app = express();

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

indexRouter.initialize(app);
mongodb.mongo_connection();

app.use((req, res, next) => {
  const error = new Error("NOT_FOUND");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return commonResponse.error(res, error.message, error.status);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

export default app;
