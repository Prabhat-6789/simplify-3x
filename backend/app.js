const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors({
    origin: '*'
}));

 const user = require("./routes/userRoute");
 app.use("/api",user);

module.exports = app;