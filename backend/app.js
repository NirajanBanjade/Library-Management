import express from 'express';
import {config} from "dotenv";
import cors from "cors";

import cookieParser from 'cookie-parser';
export const app = express()


config({path: "./config.env"});
app.use(cookieParser);
app.use(cors({
    origin: [process.env.FRONT_RND_URL],
    methods: ["GET","PORT","PUT","DELETE"],
    credentials:true, // this is important for front-back connection
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);