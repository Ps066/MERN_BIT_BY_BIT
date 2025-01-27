// all imports 
const express = require('express'); // imported our express app
const User = require('../models/user'); // imported our user model
const bcrypt = require('bcrypt');

// creating express router 
const router = express.Router();

//creating the register route
router.post('/register', async (req,res)=>{
    // using try catch to avoid errors
    try {
        // fetching all the input data from user 
        const userName = req.body.username;
        const email = req.body.email;
        const pass = req.body.password;

        // generating salt for password hashing
        const salt = await bcrypt.genSalt(15);

        //craeting a hashed password using our password
        const hashedPass = await bcrypt.hash(pass,salt);

        // registering the newly created user in our DB with ref to User model
        const newUser = new User({
            username:userName,
            email:email,
            password:hashedPass,
        })

        //saving the new user
        const user = await newUser.save();  

        // sending the response in json if the user is created with code 200 (success)
        res.status(200).json(user);
    } catch (error) {
        // snding error with code 500 (internal server error)
        res.status(500).json(error); 
    }
});


// creating a login route
router.post('/login', async(req,res)=>{
    // fetching all the input data from user 
    const userName = req.body.username;
    const pass = req.body.password;

    //try catch to check user and login 
    try {
        // find existing user in DB using mongoose.findone method on User model
        const user = await User.findOne({username:userName});

        // conditional logic to check if user variable holds a fetched user
        !user && res.status(400).json("No such user exist!")
        // the above statement is performing and operation 
        //The ! operator negates the value of user.
        // If user is null, undefined, false, 0, NaN, or an empty string (""), then !user evaluates to true.
        // hence both statement is true hence res with code 400(Bad Request) is sent
        // but if the user exist then res will not be sent hence below code will also be executed!

        // trick to check hashed pass using bcrypt compare method
        const validated = bcrypt.compare(pass,user.password); // we stored result in a variable , 
        // here user.password is comming through the DB when we know that user exists 

        // again we will ensure that our password is valid by and conditional logic
        !validated && res.status(400).json("Incorrect Login Credientials!");
        // again if the above check is not trggered then res wont be sent and we can send final res below


        // if everything is fine till this line of code then user will be verified(logged in)
        // to avoid displaying the password of the user we can do use spread operator as follow
        const {password, ...others} = user._doc; // as user._doc hold all user data

        // send data other than password
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});



// exporting the router
module.exports = router;