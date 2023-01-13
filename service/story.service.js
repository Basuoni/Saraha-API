const storyModel = require("../models/story.model");

module.exports.publishStory = async (req, res) => {
  const { question } = req.body;
  const userId = req.id;
  if (question.trim().length) {
    await storyModel.insertMany({ question,userId });
    res.json({ message: "Success" });
  } else {
    res.json({ message: "You can't send empty question." });
  }
};

module.exports.getStorys = async (req, res) => {
  const userId = req.id;
  const storys = await storyModel.find({ userId });
  res.json({ message: "Success", storys });
};
