const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const debug = require("debug")("backend");
const setRoutes = require("./routes");

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3005;
const DB_URL =
  "mongodb+srv://ztravel:123@cluster0.ze1kc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DB_URL);

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
