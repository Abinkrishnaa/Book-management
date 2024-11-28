import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/slices/bookSlice';

const BookList = () => {
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Book List</h2>
            <div className="row">
                {books.length === 0 ? (
                    <p className="text-center">No books available. Add some!</p>
                ) : (
                    books.map((book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">Author: {book.author}</p>
                                    <button
                                        className="btn btn-danger w-100"
                                        onClick={() => dispatch(deleteBook(book.id))}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BookList;
