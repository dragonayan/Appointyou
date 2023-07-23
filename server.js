const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path= require("path")

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);


const port = process.env.PORT ;
app.get("/", (req, res) => res.send("well done Ayan"));


app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));