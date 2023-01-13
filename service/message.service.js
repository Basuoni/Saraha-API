const date = require('date-and-time')
const mesModel = require("../models/message.model");
const mongoose = require("mongoose");

module.exports.sendMessage = async (req, res) => {
  const { message, storyId } = req.body;
  const now  =  new Date();
  // const value = date.format(now,'hh:mm A , DD/MM/YYYY'); ,date: value
  await mesModel.insertMany({message, storyId});
  res.json({ message: "Success" });
};
module.exports.getMessages = async (req, res) => {
  const { storyId } = req.body;
  const messages = await mesModel.find({storyId: mongoose.Types.ObjectId(storyId)});
  res.json({ message: "Success", messages });
};
