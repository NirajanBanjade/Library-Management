import mongoose from "mongoose";
import { Schema } from "mongoose";

const Bookschema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: false,  // Optional, as not every book may have an image
    },
    isbn: {
        type: String,
        required: true, // ISBN is required
    },
    status: {
        type: String,
        enum: ['available', 'checked out'], // Can either be "available" or "checked out"
        required: true,
        default: 'available', // Default status is "available"
    },
    checkedOutBy: {
        type: String,
        required: false, // Not required unless the book is checked out
    },
    dueDate: {
        type: Date,
        required: false, // Not required unless the book is checked out
    },
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