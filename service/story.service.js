const storyModel = require("../models/story.model");

module.exports.publishStory = async (req, res) => {
  const { question } = req.body;
  const userId = req.id;
  if (question.trim().length) {
    await storyModel.insertMany({ question,userId });
    res.status(201);
    res.json({ message: "Success" });
  } else {
    res.status(204);
    res.json({ message: "You can't send empty question." });
  }
};

module.exports.getStorys = async (req, res) => {
  const userId = req.id;
  const storys = await storyModel.find({ userId });
  res.json({ message: "Success", storys });
};
