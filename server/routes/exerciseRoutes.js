const router = require("express").Router();
const Exercise = require("../models/exerciseModel");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("error: " + err));
});

router.post("/add", (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date(req.body.date),
  });

  newExercise
    .save()
    .then(() => res.json("Ecercise added"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("error: " + err));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.post("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Ecercise updated"))
        .catch((err) => res.status(400).json("error: " + err));
    })
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
