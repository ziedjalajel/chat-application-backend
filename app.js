const express = require("express");

// Database
const db = require("./db/models");

//Routes
const userRoutes = require("./routes/users");
const chatRoutes = require("./routes/chats");
let profileRouter = require("./routes/profiles");
const messageRoutes = require("./routes/messages");

const cors = require("cors");

const path = require("path");

const app = express();

// Middleware
app.use(cors());

//Passport
// app.use(passport.initialize());
// passport.use(localStrategy);

app.use(express.json());
app.use("/profile", profileRouter);

// Routes
// app.use(userRoutes);
app.use("/chats", chatRoutes);
// Routes

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
  // await db.sequelize.sync();
  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
