const date = require('date-and-time')
const mesModel = require("../models/message.model");
const mongoose = require("mongoose");

module.exports.sendMessage = async (req, res) => {
  const { message, sendTo } = req.body;
  const now  =  new Date();
  const value = date.format(now,'hh:mm A , DD/MM/YYYY');
  await mesModel.insertMany({ message, sendTo ,date: value});
  res.json({ message: "Success" });
};
module.exports.getMessages = async (req, res) => {
  const id = req.id;
  const messages = await mesModel.find({ sendTo: mongoose.Types.ObjectId(id) });
  res.json({ message: "Success", messages });
};
