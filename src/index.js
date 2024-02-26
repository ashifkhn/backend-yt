import { connnectDB } from "./db/index.js";
import dotenv from "dotenv"
import express from "express"

const app=express()
dotenv.config({
    path:"./env"
})

connnectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Process is running on PORT ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
