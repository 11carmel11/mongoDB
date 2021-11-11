const mongoose = require("mongoose");
require("dotenv").config();

const CommentsSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: Object,
    required: true,
  },
});

const Comments = mongoose.model("Comments", CommentsSchema);
module.exports = Comments;
