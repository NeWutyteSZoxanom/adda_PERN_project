const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  // role: { type: DataTypes.STRING, defaultValue: "USER " },
  img: { type: DataTypes.STRING, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Post = sequelize.define("post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: true },
  like_count: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Chat = sequelize.define("chat", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Chat_user = sequelize.define("chat_user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Message = sequelize.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Post);
Post.belongsTo(User);

Type.hasMany(Post);
Post.belongsTo(Type);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Message);
Message.belongsTo(User);

Chat.hasMany(Message);
Message.belongsTo(Chat);

User.hasOne(Chat);
Chat.belongsTo(User);

User.hasOne(Chat_user);
Chat_user.belongsTo(User);

Chat.hasOne(Chat_user);
Chat_user.belongsTo(Chat);

module.exports = {
  User,
  Chat,
  Chat_user,
  Message,
  Comment,
  Post,
  Type,
};
