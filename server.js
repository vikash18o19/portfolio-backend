const express = require("express");

const app = express();
const port = 3000;
const contactRouter = require("./api/contact");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.get("/", (req, res) => {
  res.send("welcome to the backend of Portfolio");
});
app.use(allowCrossDomain);
app.use("/api", contactRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
