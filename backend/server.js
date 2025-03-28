import { app } from "./app.js";
import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ MongoDB connected');
  
    const PORT = process.env.PORT 
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  }).catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  });

app.get('/',(req,res)=>{
    console.log("API is working!");
    
})