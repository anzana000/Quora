const mongoose = require("mongoose");

const askSchema = mongoose.schema({
  question: {
    type: String,
    required: [true, "Question field is required"],
    trim: true,
  },
});

const Questions = mongoose.model("Questions", askSchema);

module.exports = Questions;
