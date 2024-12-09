const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const routes = require("./routes");
const cors = require("cors");

// MongoDB config
require("./utils/db");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
