// Importing necessary file, module and package , and creating instances of them
import fs from "fs";
import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, prettyPrint } = format;
const fsPromise = fs.promises;

// Formatting Logger Data
const logger = createLogger({
  format: combine(
    label({ label: "Data is being stored here" }),
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: "Request-Logging" },
  transports: [
    new transports.File({ filename: "logs.log", level: "info" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
});

const loggerMiddleware = async (req, res, next) => {
  // Log request body.
  if (!req.url.includes("login") && !req.url.includes("register")) {
    const logData = JSON.stringify(req.body);
    await logger.log({
      level: "info",
      Request_Body: logData,
      Request_URL: req.url,
      Request_Query: req.query,
      Request_Params: req.params,
    });
  }
  next();
};

// Exporting loggerMiddleware
export default loggerMiddleware;
