const express = require("express");
const router = express.Router();

const {
  chatFetch,
  ChatCreate,
  chatList,
} = require("../controllers/chatController");

router.param("chatId", async (req, res, next, chatId) => {
  const chat = await chatFetch(chatId, next);

  if (chat) {
    req.chat = chat;
    next();
  } else {
    const err = new Error("chat Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", chatList);

router.post("/", ChatCreate);

module.exports = router;
