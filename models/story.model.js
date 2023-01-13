const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    isOpen: { type: Boolean, default: true },
    question: { type: String, default: "" },
    visiting: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
    userId: mongoose.SchemaTypes.ObjectId,
  },
  { timestamps: true }
);
module.exports = mongoose.model("story", schema);
