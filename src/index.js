import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/db.js';
import { app } from './app.js';

dotenv.config();

connectDb().then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running on the port : ${process.env.PORT}`);
    });
}).catch((err)=>{
    console.log("Error:", err);
    throw err;
})

















// // an approach to connect the db using the Invoked Function Expression (IIFE)
// const app = express();
// dotenv.config();
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("Err:", error);
//             throw error;            
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on the port ${process.env.PORT}`);            
//         })
//     } catch (error) {
//         console.log("Err:", error);
//         throw error;
//     }
// })()