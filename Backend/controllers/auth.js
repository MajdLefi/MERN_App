const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const isAuth = require("../middlewares/isAuth");

//Register
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists !" });
    }
    //Create new User
    user = new User({ firstName, lastName, email, password });
    //hash password with bcrypt
    const salt = 10; //hash level
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    await user.save();
    //sign user
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: "7 days",
    });

    res.status(200).send({ msg: "User registred with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
};

//Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //verify the match with email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Invalid email or password ! " });
    }
    //verify the match of the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password ! " });
    }

    //login user
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: "7 days",
    });

    return res.send({ msg: "Logged in with success ! ", user, token });
  } catch (error) {
    console.log(error);
  }
};
