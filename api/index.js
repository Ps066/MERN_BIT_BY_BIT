// all imports 
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// importing all the routes
const authRoute = require('./Routes/Auth');

// configure express app
const app = express();   // created express app
dotenv.config();   //dotenv config
app.use(express.json()); // whithout this we cant read re.body in json format

// variables from the .env file
const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URL;

// connection for mongoDB atlas 
mongoose.connect(MONGO).then(()=>{
    console.log("MongoDB is connected successfully");
}).catch((err)=>{
    console.error(err);
})

// creating a get request to see if express app is working (Testing)
app.get('/',(req,res)=>{
    try {
        res.send(`<h1>HEllo World</h1>`)
    } catch (error) {
        console.error(error);
        
    }
})

// setting up all the middelwares for our app
app.use('/api/auth',authRoute);

// host app on a port using listen command of express
app.listen(PORT, ()=>{
    console.log("The app is running on port 5000");
})