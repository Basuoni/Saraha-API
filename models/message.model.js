const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    message: String,
    storyId: mongoose.SchemaTypes.ObjectId,
    // date:String
  },
  { timestamps: true }
);
module.exports = mongoose.model("message", schema);
