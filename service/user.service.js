const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
module.exports.signup = async (req, res) => {
  const { name, phone, password, age } = req.body;
  const user = await userModel.findOne({ phone });
  console.log(user);
  if (user) {
    res.json({ message: "The Phone Number Already Exists." });
  }else {
    await userModel.insertMany({ name, phone, password, age });
    const user = await userModel.findOne({ phone });
    const token = jwt.sign({ id: user._id }, "saraha");
    res.json({ message: "success", token });
  } 
};

module.exports.signin = async (req, res) => {
  const { phone, password } = req.body;
  const user = await userModel.findOne({ phone });
  if (user) {
    if (password === user.password) {
      
      const token = jwt.sign({ id: user._id }, "saraha");

      res.json({ message: "Login success", token, user });
    } else {
      res.json({ message: "Can't Login, Please Check Your Password." });
    }
  } else {
    res.json({
      message: "Can't Find Your Account, Please Check Your Phone Number.",
    });
  }
};
