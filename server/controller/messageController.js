const { Message } = require("../models/models");
const ApiError = require("../Error/ApiError");

class MessageController {
  async create(req, res) {
    const { userId, text, chatId } = req.body;
    const message = await Message.create({ userId, text, chatId });

    return res.json(message);
  }
  async getChatRoom(req, res) {
    const { id } = req.params;
    const messages = await Message.findAll({
      where: { chatId: id },
    });
    return res.json(messages);
  }
}
module.exports = new MessageController();
