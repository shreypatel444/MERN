require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    Number,
    require: true,
  },
  contact: {
    type: Number,
    require: true,
  },
  isAdmin: {
    type: String,
    default: false,
  },
});

signupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const hash_password = await bcrypt.hash(this.password, 10);
    this.password = hash_password;
  } catch (error) {
    console.log(error);
  }
});

signupSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECREAT_KEY,
      {
        expiresIn: "2d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", signupSchema);

module.exports = User;
