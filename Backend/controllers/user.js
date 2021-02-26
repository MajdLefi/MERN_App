const User = require("../models/User");

exports.getCurrent = (req, res) => {
  res.json(req.user);
};

exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    console.error({ msg: "error get all users", error });
  }
};

exports.editUser = (req, res) => {
  const userID = req.params.userID;
  User.findByIdAndUpdate(userID, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.send(user);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
};

exports.deleteUser = (req, res) => {
  const id = req.params.userID;
  User.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "User Not Found " });
      }
      res.send(user);
    })
    .catch((err) => res.status(400).send({ msg: "Error Remove user " }));
};
