const mongoose = require("mongoose");

const Note = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", Note);
