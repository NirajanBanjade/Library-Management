import express from 'express';
import { Book, User } from './schema.js';

const router = express.Router(); // creates a mini router

// GET /api/books


// POST /api/books
// router.post('/', createBook);

// // DELETE /api/books/:id
// router.delete('/:id', deleteBook);

// router.update('/:id',updatebook);

async function getBooks(req, res) {
    try {
      const books = await Book.find({}); // fetch all books from MongoDB
      res.status(200).json(books);     // send response to frontend
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch books', error });
    }
  }
router.get('/', getBooks);

export default router;
