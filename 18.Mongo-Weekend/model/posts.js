const mongoose = require("mongoose");
require("dotenv").config();

const PostSchema = new mongoose.Schema({
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

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
