import express from 'express';
import {config} from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
export const app = express()

config({path: "./config.env"});

app.use(cors({
    origin: [process.env.FRONT_RND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ fixed
    credentials: true,
  }));
  app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import bookRoutes from './products/bookRoutes.js';
app.use('/api/books', bookRoutes);