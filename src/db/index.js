import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connnectDB=async()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`)
       console.log(`Mongo DB connected. \nDB host: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("Mongo db connection error: ",error)
    }
}