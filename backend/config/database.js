/*this file conncet server to database.Database i am using is mongoDB.*/

const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data) => {

        console.log("process.env.DB_URI: ",process.env.DB_URI);
        console.log(`mongoDB connect with server${data.connection.host}`);
    })
};

module.exports = connectDatabase;