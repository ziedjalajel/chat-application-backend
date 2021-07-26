const { Chat } = require("../db/models");

exports.chatFetch = async (chatId, next) => {
  try {
    const chat = await Chat.findByPk(chatId);
    return chat;
  } catch (error) {
    next(error);
  }
};

exports.ChatCreate = async (req, res, next) => {
  try {
    const newChat = await Chat.create(req.body);
    res.status(201).json(newChat);
  } catch (error) {
    next(error);
  }
};

exports.chatList = async (req, res, next) => {
  try {
    const chats = await Chat.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(chats);
  } catch (error) {
    next(error);
  }
};
