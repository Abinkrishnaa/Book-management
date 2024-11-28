import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
        <div>
            <header className="bg-primary text-white text-center py-4 mb-4">
                <h1>Book Management System</h1>
            </header>
            <AddBook />
            <BookList />
        </div>
    </Provider>
);

export default App;
