var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var bookingsRouter = require("./routes/bookings");
var toursRouter = require("./routes/tours");
var contactsRouter = require("./routes/contacts");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/bookings", bookingsRouter);
app.use("/tours", toursRouter);
app.use("/contacts", contactsRouter);

module.exports = app;
