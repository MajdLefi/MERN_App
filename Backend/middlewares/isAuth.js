//req json web token
const jwt = require("jsonwebtoken");

//req the user schema
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    //check token
    if (!token)
      return res.status(401).send({ msg: "No token authorization denied ! " });

    const decoded = await jwt.verify(token, process.env.secretOrKey);

    //add user from payload
    const user = await User.findById(decoded.id);

    //check user
    if (!user) {
        return res.status(401).send({msg: 'Authorization denied ! '})
    }

    //create user
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({msg:'Token not valid !'})
  }
};

module.exports = isAuth;