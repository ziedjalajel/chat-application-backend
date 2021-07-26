const express = require("express");
const cors = require("cors");
const path = require("path");

// required Routes

const app = express();

// Middleware
app.use(cors());

//Passport
// app.use(passport.initialize());
// passport.use(localStrategy);

// Routes

app.use(express.json());

app.use("/media", express.static("media"));

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
