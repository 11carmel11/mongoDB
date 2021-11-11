const mongoose = require("mongoose");
require("dotenv").config();

const PostsSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;
