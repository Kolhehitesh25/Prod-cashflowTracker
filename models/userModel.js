const mongoose = require("mongoose");

//desgn schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  }, 
  { timestamps: true } // create record date capture using tstmp
);

//export
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
