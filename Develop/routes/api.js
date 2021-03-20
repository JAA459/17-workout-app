const router = require("express").Router();
const workout = require("../models/workout");
// const db = mongojs(databaseUrl, collections);

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

router.put("/api/workouts:id", (req, res) => {
    workout.update({_id: db.ObjectId(req.params.id)}, {$set: {"type": req.body.type, "name": req.body.name, "duration": req.body.duration, "weight": req.body.weight, "reps": req.body.reps, "sets": req.body.sets}})
      .then(dbworkout => {
          console.log(dbworkout);
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;