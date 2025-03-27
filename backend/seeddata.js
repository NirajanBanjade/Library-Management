import mongoose from "mongoose";
import dotenv from 'dotenv';
import { Book, User } from "./products/schema.js"
import Books from "./products/books.js";
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

async function seedData(){
    try{
        await Book.deleteMany({});
        await Book.insertMany(Books);
        // console.log(`${book_data.length} books seeded successfully`);
        console.log("Successfully added books in the database!")
        process.exit();
    }catch(error){
        console.log(`Error message: ${error}`);
        process.exit(1);
    }
}

async function destroyData() {
    try {
        // Delete all books
        await Book.deleteMany({}); // deleteMany() also works same but it takes a map with no filter
        // Check if any books still exist
        const remainingBooks = await Book.find(); // or use Book.countDocuments()

        if (remainingBooks.length > 0) {
            console.log(`There are still ${remainingBooks.length} books remaining.`);
        } else {
            console.log("All books successfully deleted from the database! ");
        }
        process.exit();

    } catch (error) {
        console.log(`Error message: ${error}`);
        process.exit(1);
    }
}

// seedData();
if(process.argv[2] === "-d"){
    destroyData();
}
else{
    seedData();
}