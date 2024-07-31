require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/signup");

const userMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.json({ message: "Token not provided..." });
  }

  const trimToken = token.replace("Bearer", "").trim();
  try {
    const verifyUser = await jwt.verify(trimToken,process.env.JWT_SECREAT_KEY);
    const userData = await User.findOne({email : verifyUser.email}).select({password : 0});
    req.user = userData;
    req.token = token;
    next();
  } catch (error) {
    return res.json({
      msg: "Invalid token...",
    });
  }
};

module.exports = userMiddleware