Question = require("../models/askModel");
catchAsync = require("../utils/catchAsync");
AppError = require("../utils/appError");

exports.askQuestion = catchAsync(async (req, res, next) => {
  const newQuestion = await Question.create(req.body);
  res.status(201).json({
    status: "success",
    data: newQuestion,
  });
});

exports.showAllQuestions = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).json({
    status: "success",
    results: questions.length,
    data: questions,
  });
});

exports.getQuestion = catchAsync(async (req, res, next) => {
  const question = await Question.findById(req.params.id);

  if (!question) {
    return next(new AppError("No question found with that id", 404));
  }
  res.status(200).json({
    status: "success",
    data: question,
  });
});

exports.deleteQuestion = catchAsync(async (req, res, next) => {
  const question = await Question.findByIdAndDelete(req.params.id);

  if (!question) {
    return next(new AppError("No question found with that id", 404));
  }
  res.status(204).json({
    status: "success",
    data: question,
  });
});

exports.updateQuestion = catchAsync(async (req, res, next) => {
  const question = await Question.findByIdAndUpdate(
    req.params.id,
    { question: req.body.question },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!question) {
    return next(new AppError("No question found with that id", 404));
  }
  res.status(201).json({
    status: "success",
    data: question,
  });
});
