import {createBook,getAllBooks,getOneBook,updateOneBook,deleteOneBook} from "../controllers/book.controller.js";
    import { Router } from "express"
    const router = Router();


    router.route("/books")
        .post(createBook)
        .get(getAllBooks);
    
   
    router.route("/books/:id")
        .get(getOneBook)
        .put(updateOneBook)
        .delete(deleteOneBook);
    
    export default router;