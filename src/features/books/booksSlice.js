import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [{
        id:1, 
        title: "Love Bangla",
        author: "Abdur"
    },
    {
        id:2, 
        title: "Bangli",
        author: "Abdur"
    },
    {
        id:3, 
        title: "Bangli Pepole",
        author: "Kabir Mia"
    },
    {
        id:4, 
        title: "Kota Bangla",
        author: "Jahid Islam"
    },
]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state)=>state,
        updateBook : (state, action) =>{
            const {id, title, author} = action.payload;
            const isBookExist = state.books.filter((book)=> book.id === id)
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        addBook: (state, action) =>{
            state.books.push(action.payload);
        },
        deleteBook: (state, action) =>{
            const id =(action.payload)
            state.books = state.books.filter(book => book.id !== id);
        }
    }
});

export default booksSlice.reducer;
export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
