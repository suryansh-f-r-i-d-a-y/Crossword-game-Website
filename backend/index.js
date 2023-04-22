// import express, { urlencoded } from "express";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import dotenv from 'dotenv'
// import userRoutes from "./routes/users.js";
// import authRoutes from "./routes/auth.js";
// import cors from 'cors'
// import bodyParser from 'body-parser'



var express = require("express");
var mongoose = require( "mongoose");
var cookieParser = require("cookie-parser");
var dotenv = require('dotenv')
var userRoutes = require("./routes/users.js")
var authRoutes = require("./routes/auth.js")
var cors = require('cors')
var bodyParser = require('body-parser')
// var cors = require('cors')

const app = express();
dotenv.config();


const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect("mongodb://0.0.0.0:27017/")
        .then(() => {
            console.log("connect to mongodb database");
        })
        .catch((err) => {
            throw err;
        });
};

app.use(cors())

app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    connect();
    console.log("Listening to port 8000");
},
);
