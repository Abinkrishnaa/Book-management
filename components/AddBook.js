import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/bookSlice';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ id: Date.now(), title, author }));
        setTitle('');
        setAuthor('');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add a New Book</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Book Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        id="author"
                        className="form-control"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
