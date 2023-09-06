/*this file main file.This file do all setup for server.*/

const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
dotenv.config();
connectDatabase();

const port = process.env.PORT;
app.listen(port,(err)=>{

    if(!err)
    console.log("server is listening on port: ",port);

    else
    console.log("error is: ",error);

})