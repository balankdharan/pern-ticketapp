const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ticketRoutes = require("./api/routes/ticket");

//routes
app.use("/v1/api/tickets", ticketRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
