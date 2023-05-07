const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  sex: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
  },
  govtID: {
    type: String,
  },
  id: {
    type: String,
  },
  guardianDetails: {
    type: String,
  },
  email: {
    type: String,
  },
  emergencyContact: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  occupation: {
    type: String,
  },
  religion: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  nationality: {
    type: String,
  },
});

module.exports = mongoose.model("userRegister", userSchema);
