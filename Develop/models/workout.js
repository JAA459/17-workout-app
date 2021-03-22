const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date() },
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

// workoutSchema.virtual("totalDuration").get(function () {
//   const duration = this.exercises.reduce((acc, curr) => {
//       return acc + curr.duration;
//       }, 0);
//   return duration;
// });
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;