const { Chat_user } = require("../models/models");
const ApiError = require("../Error/ApiError");

class ChatUserController {
  async create(req, res) {
    const { userId, chatId } = req.body;
    const comment = await Chat_user.create({ userId, chatId });
    return res.json(comment);
  }
}
module.exports = new ChatUserController();
