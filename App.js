const express = require("express");
const cors = require("cors");
const merkleTree = require("./routes/merkleTree");

const app = express();


//Body Parser
app.use(express.json({ limit: "10kb" }));
app.use(cors());

//ROUTES
app.use("/", merkleTree);

module.exports = app;
