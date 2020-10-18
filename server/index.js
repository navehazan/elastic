const express = require("express");
const bodyParser = require("body-parser");
const client = require("./elstic-search/index");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/search/:text", client.searchDoc);


const port = process.env.PORT || 3001;
app.listen(port);
console.log("Node + Express REST API skeleton server started on port: " + port);

module.exports = app;
