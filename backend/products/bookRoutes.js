import express from 'express';
import { Book, User } from './schema.js';

const router = express.Router(); // creates a mini router

// GET /api/books


// POST /api/books


async function getBooks(req, res) {
    try {
      const books = await Book.find({}); // fetch all books from MongoDB
      res.status(200).json(books);     // send response to frontend
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch books', error });
    }
  }

async function getOne(req,res){
    try{
        const selected_book = await Book.findById(req.params.id); // req.params.id scraps the id from the url and find it .
        if(!selected_book){
            res.status(404).json({message: "Error finding the product!"});
        }
        res.status(200).json(selected_book);

    }
    catch{
        res.status(500).json({ message: 'Failed to fetch book', error }); // this is if the problem is caught from server side. and above is for the client side.
    }
}


router.get('/', getBooks);
router.get('/:id', getOne);
// router.post('/', createBook);

// // DELETE /api/books/:id
// router.delete('/:id', deleteBook);

// router.update('/:id',updatebook);

export default router;
