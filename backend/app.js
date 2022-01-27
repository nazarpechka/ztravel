const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const logger = require("morgan");
const debug = require("debug")("backend");
const setRoutes = require("./routes");

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3005;
const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL);

app.use(compression());
app.use(helmet());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", setRoutes(router));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build/")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/", "index.html"));
  });
}

app.listen(PORT, () => {
  debug(`Ztravel running on port ${PORT}`);
});
