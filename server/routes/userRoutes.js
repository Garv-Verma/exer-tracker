const router = require("express").Router();
const User = require("../models/userModel");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error: " + err));
});

router.post("/add", (req, res) => {
  const newUser = new User({
    username: req.body.username,
  });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
