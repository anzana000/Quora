const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
const askRouter = require("./routes/askRoute");

//Milddlewares
app.use(express.json());

app.use(morgan("dev"));

//Routes
app.use("/api/v1/ask", askRouter);
module.exports = app;

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
