const User = require("../model/signup");
const Contact = require("../model/contact");
const bcrypt = require("bcryptjs");
const Service = require("../model/service");

const signup = async (req, res) => {
  try {
    const { username, email, password, contact, isAdmin } = req.body;

    const check = await User.findOne({ email });

    if (check) {
      return res.status(200).json({ message: "You are already SignUped..." });
    }
    const created = await User.create({
      username,
      email,
      password,
      contact,
      isAdmin,
    });

    res.status(200).json({
      msg: "Login Successfully",
      token: await created.generateToken(),
      userId: created._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checked = await User.findOne({ email });

    if (!checked) {
      return res
        .status(200)
        .json({ message: "You are not SignUped, Please first SignUp..." });
    }

    const hash_compared = await bcrypt.compare(password, checked.password);

    if (hash_compared) {
      return res.status(200).json({
        msg: "Login Successfully",
        token: await checked.generateToken(),
        userId: checked._id.toString(),
      });
    } else {
      res.status(401).json({message :  "Invalid Login Details..."});
    }
  } catch (error) {
    console.log(error);
  }
};

const ContactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    await Contact.create({ username, email, message });
    return res.status(200).json("Message send succesfully....");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const user = async (req, res) => {
  try {
    const data = req.user;
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

const service = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.json({ msg: "Response not founded..." });
    }
    return res.status(200).json(response);
  } catch (error) {
    res.json("Error is ",error);
  }
};

module.exports = { signup, login, ContactForm, user, service };
