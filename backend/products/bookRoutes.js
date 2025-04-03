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

async function updateBook(req,res){
  try{
    const itemBook=await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true,runValidators:true},
    );
    if(!itemBook){
      return res.status(404).json({message: "Product not found!"});
    }
    res.status(200).json({message: "Product updated!"});
  }
  catch{
    res.status(500).json({ message: 'Failed to update the book details!', error })
  }
}

async function deleteBook(req,res){
  try{
    const itemBook= await Book.findByIdAndDelete(
      req.params.id
    )
    if(!itemBook){
      return res.status(404).json({message: "Product not found!"});
    }
    res.status(200).json({success:true,message: "Product deleted!"});
  }
  catch{
    res.status(500).json({ message: 'Failed to delete the book details!', error })
  }
}



router.get('/', getBooks);
router.get('/:id', getOne);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

// router.post('/', createBook);

// // DELETE /api/books/:id
// router.delete('/:id', deleteBook);

// router.update('/:id',updatebook);

export default router;
