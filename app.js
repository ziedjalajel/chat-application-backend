const express = require("express");
// cors
const cors = require("cors");
//path
// const path = require("path");

//Database
const db = require("./db/models");

// required Routes

const app = express();

// Middleware
app.use(cors());

//Passport
// app.use(passport.initialize());
// passport.use(localStrategy);

// Routes
const messageRoutes = require("./routes/messages");

app.use(express.json());

app.use("/messages", messageRoutes);

app.use("/media", express.static("media"));

app.use((req, res, next) => {
  const err = new Error("Path Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
