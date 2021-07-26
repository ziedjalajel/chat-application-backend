const { Message } = require("../db/models");

exports.messageFetch = async (messageId, next) => {
  try {
    const message = await Message.findByPk(messageId);
    return message;
  } catch (error) {
    next(error);
  }
};
exports.messageCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
exports.messageList = async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
exports.messageDetail = async (req, res) => res.json(req.message);

exports.messageDelete = async (req, res, next) => {
  try {
    await req.message.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
