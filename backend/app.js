const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("backend");
require("dotenv").config();
require("./config/passport");
require("./config/db");

const errorHandler = require("./middleware/errorHandler");
const setRoutes = require("./routes");

const app = express();
const router = express.Router();

const PORT = process.env.PORT;

app.use(compression());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", setRoutes(router));
app.use("/api", errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build/")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/", "index.html"));
  });
}

app.listen(PORT, () => {
  debug(`Ztravel running on port ${PORT}`);
});
