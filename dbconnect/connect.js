import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURI = process.env.MONGO_URI;

mongoose.connect(MONGOURI).then (()=>{
    console.log("Connected successfully");
})
 .catch((error) => console.log(error));