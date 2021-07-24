const express = require("express");
const morgan = require("morgan");

const app = express();
const askRouter = require("./routes/askRoute");

//Milddlewares
app.use(express.json());

app.use(morgan("dev"));

//Routes
app.use("/api/v1/ask", askRouter);
module.exports = app;

app.all("*");
