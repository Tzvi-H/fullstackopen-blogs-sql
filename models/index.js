const Blog = require("./blog");
const User = require("./user");
const ReadingList = require("./reading_list");

User.hasMany(Blog);
Blog.belongsTo(User);

// User.sync({ alter: true });
// Blog.sync({ alter: true });
User.belongsToMany(Blog, { through: ReadingList, as: "readings" });
Blog.belongsToMany(User, { through: ReadingList, as: "reading_list_user" });

module.exports = {
  Blog,
  User,
  ReadingList,
};
