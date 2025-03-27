import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
const myDB=async ()=>{
    try {
        const conect= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected at : ${conect.connection.host}`);
    } catch (error) {
        console.log(`Error message: ${error}`);
        process.exit(1);
    }
};
myDB();

