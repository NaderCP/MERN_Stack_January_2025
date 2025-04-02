import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "book title is required"],
            minLength: [2, "book title must be at least 2 characters long"],
            maxLength: [255, "book title must be at most 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "author is required"],
            minLength: [5, "book author must be at astle 5 characters long"],
            maxLength: [255, "book author must be at most 255 characters long"]
        },
        pages: {
            type: Number,
            required: [true, "Release year is required"],
            min: [1, "book must at least contains 1 page"]
            
        },
        isAvailable:{
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;