import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/db.js';

dotenv.config();

connectDb();

















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