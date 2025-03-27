import mongoose from "mongoose";
import { Schema } from "mongoose";

const Bookschema = new Schema({
    author:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    imageLink:{
        type:String,
        required:false,
    },
    language:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:false,
    },
    pages:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    }
});

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"Password must be at least 8 characters long"],
    },   
});

export const Book = mongoose.model("Book", Bookschema);
export const User = mongoose.model("User", UserSchema);