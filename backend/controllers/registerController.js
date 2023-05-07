const userRegister = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await userRegister.findOne({email});
    if(isExist){
      res.status(400);
    throw new Error("user already exists");
    }
    const user = await userRegister.create(req.body);
    return res.status(200).send("Data uploded successfuly");
  } catch (error) {
    res.status(404).send(error);
  }
};

const getUser = async (req, res) => {
  try {
   
    const data = await userRegister.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { registerUser, getUser };
