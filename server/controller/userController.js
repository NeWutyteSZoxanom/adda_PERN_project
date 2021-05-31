const ApiError = require("../Error/ApiError");
const { User, Chat } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, name) => {
  return jwt.sign({ id, email, name }, process.env.SECRED_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return next(ApiError.badRequest("Некорректные данные"));
    }
    const condidate = await User.findOne({ where: { email } });
    if (condidate) {
      return next(ApiError.badRequest("Пользователь существует"));
    }
    const hashPass = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPass, name });
    const token = generateJwt(user.id, user.email, user.name);
    const chatroom = await Chat.create({ userId: user.id });
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("Пользователь не найден"));
    }
    let comparePas = bcrypt.compareSync(password, user.password);
    if (!comparePas) {
      return next(ApiError.badRequest("Пароль не верный"));
    }
    const token = generateJwt(user.id, user.email, user.name);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return req.jso({ token });
  }
  async updateProfile(req, res, next) {
    const { img, name } = req.body;

    //доделать
    return req.jso({ token });
  }
}
module.exports = new UserController();
