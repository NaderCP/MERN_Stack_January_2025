import Book from "../models/book.model.js";
// create new book
async function createBook(req, res, next) {
    try{
        const newBook= await Book.create(req.body)
        res.json(newBook)
    }
    catch(error){
        console.log(error)
        //res.status(400).json(error)
        next(error)
    }
}
// Retrieve all books from the collection.

async function getAllBooks(req, res, next) {
    try{
        const allBooks = await Book.find()
        res.json(allBooks)
    }
    catch (error) {
        console.log(error)
        //res.status(400).json(error)
        next(error)
    }
}

//Retrieve a single book from the collection.

async function getOneBook(req, res) {
    try{
        const oneBook = await Book.findById(req.params.id)
        res.json(oneBook)
    }
    catch (error) {
        console.log(error)
        //res.status(400).json(error)
        next(error)
    }
}
//Edit a book from the collection.

async function updateOneBook(req, res, next) {
    const options = {
        new: true,
        runValidators: true,
    };
    try{
    const updateOneBook = await Book.findByIdAndUpdate(req.params.id, req.body, options)
    res.json(updateOneBook)
}catch (error) {
    console.log(error)
    //res.status(400).json(error)
    next(error)
}


}
 async function deleteOneBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export  {createBook,getAllBooks,getOneBook,updateOneBook,deleteOneBook};