
import * as bookModel from "../Models/bookmodels.js";

// READ: Get all books
export const fetchAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
};

// INSERT: Create a new book
export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
};
