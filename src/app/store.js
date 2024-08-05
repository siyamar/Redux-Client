import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";
import postsReducer from '../features/posts/postsSlice';
import booksReducer from "../features/books/booksSlice";
import latestBooksReducer from "../features/latestBooks/latestBooksSlice"

const store = configureStore({
    reducer:{
        counters: countersReducer,
        posts: postsReducer,
        booksReducer: booksReducer,
        latestBooks: latestBooksReducer,
    }
});

export default store;