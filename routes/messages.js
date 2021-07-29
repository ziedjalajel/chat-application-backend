const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  messageCreate,
  messageDelete,
  messageDetail,
  messageFetch,
  messageList,
} = require("../controllers/messageController");

router.param("messageId", async (req, res, next, messageId) => {
  const message = await messageFetch(messageId, next);
  if (message) {
    req.message = message;
    next();
  } else {
    const err = new Error("Message Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/", upload.single("image"), messageCreate);

router.get("/", messageList);

router.get("/:messageId", messageDetail);

router.delete("/:messageId", messageDelete);

module.exports = router;
