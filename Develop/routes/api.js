const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  workout.create(body)
    .then(dbworkout => {
        console.log(dbworkout);
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(req.params.id,
      {$push:{exercises: req.body}},
      {new: true}
    )
      .then(dbworkout => {
          console.log(dbworkout);
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
  workout.find()
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;