import mongoose from "mongoose";

const quizzeschema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "A quiz must have a quesion name"],
    unique: true,
    trim: true,
  },
  options: {
    type: Array,
    validate: {
      validator: function (val) {
        return val.length === 4;
      },
      message: "A quiz must have exactly 4 options",
    },
  },
  correctOption: {
    type: Number,
    validate: {
      validator: function (val) {
        return val <= 3 && val >= 0;
      },
      message: "Option cannot exist cause it out of range (0,3)",
    },
  },
  points: {
    type: Number,
    required: [true, "The points of the question is needed"],
  },
});

const Quiz = mongoose.model("Quiz", quizzeschema);

export default Quiz;
