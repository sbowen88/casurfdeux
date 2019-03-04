const express = require("express"),
  bodyParser = require("body-parser");
massive = require("massive");
port = 4000;
require("dotenv").config();
const app = express();

app.use(bodyParser.json());

app.listen(port, _ => console.log(`listening on port ${port}`));
