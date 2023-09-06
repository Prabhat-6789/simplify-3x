/*this controller contain functionalities like registerUser,loginUser,getallUser,getsingleUser
deleteUser and updateUser and i also used try catch block for handling errors*/


const User = require('../models/userModel');
const bcrypt = require('bcrypt');

/*registerUser function starts.it takes data from frontend and save to database(mongoDB)
the data is taken like PASSWORD will be hashed.For hashing i used bcrypt*/

exports.registerUser = async(req,res) => {

    try{

        req.body.password = await bcrypt.hash(req.body.password,10);
        const {firstName,lastName,number,company,employeeId,employeeRole,email,password} = req.body;
            
            //console.log("req.body: ",req.body);
            const user = await User.create(req.body);
            //console.log("user: ",user);
            res.status(200).send(user);
    }

    catch(error){
        console.log(error);
    }
}
//register user function ends

/*loginuser function starts.
It takes email and password as data and then matches from database.
if the email and password will match then only user can login and stored data like TOKEN in cookies
for AUTHENTICATION purpose. The token i generated through JWT.*/


exports.loginUser = async(req,res) => {

    try{
        const {email,password} = req.body;

        if(!email || !password)
        res.status(400).send("please enter email and password");

        const user = await User.findOne({email}).select("password");
        if(!user)
        res.status(400).send("please enter valid email and password");

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        if(!isPasswordMatched)
        res.status(400).send("invalid email id or password");

        console.log(user);
        const token = await user.getJWTToken();
        console.log("token: ",token);
        const options = process.env.COOKIE_EXPIRE;
        res.cookie("token",token,options);
        console.log("cookies: ",req.cookies);
        res.status(200).send(token);
    }

    catch(error){
        console.log("error is: ",error);
    }
}
//loginUser functin end

/*getAllUser function starts.
it will return all user whatever is present in our database*/

exports.getAllUser = async(req,res) => {

    try{
        const users = await User.find();
        res.status(200).send(users);
    }

    catch(error){
        console.log("error: ",error);
    }
}
//getAllUser function ends.

/*getSingleUser function start.
this will return details of single user which i demand of particular ID.*/ 
exports.getSingleUser = async(req,res) => {

    try{

        console.log("data: ",req.params.id);
        const id=req.params.id;
        const user = await User.findOne({_id:id});
        console.log("user: ",user);
        res.status(200).send(user);
    }

    catch(error){
        console.log("error is: ",error);
    }
}
//getSingleUser function ends.

/*deleteUser function starts.
It will delete data of particular Id which user wants.First it will search data of 
that particular Id.If it will be then only data will be deleted otherwise not.*/

exports.deleteUser = async(req,res) => {

    const id = req.params.id;
    const user = await User.findByIdAndRemove(id);
    res.status(200).send(user);
}
//deleteUser function ends.

/*updateUsr function starts.
it will update data of any particular Id which user wants.*/

exports.updateUser = async (req,res) => {

    try{

        let user = await User.findById(req.params.id);

        if(!user)
        {
            res.status(400).send("user not found");
        }
        
        data = await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });

        res.status(200).send(data);
    }

    catch(error){
        console.log("error is: ",error);
    }
};
//update user function ends.
