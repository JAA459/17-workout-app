const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: {
    type: { type: String, },
    name: { type: String, },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
      type: Number,
    }
  },
},
// {
//   toJSON: {
//     virtuals: true,
//   },
// }
);

// workoutSchema.virtual("totalDuration").get(() => {
//   return this.exercises.reduce((total, exercise) => total + exercise, 0);
// });
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;