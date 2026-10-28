import * as bookModel from '../Models/bookModel.js';

export const fetchAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
}

export const createbook = async(book) => {const bookId = await bookmodel.insert (book);
    return bookId;
}