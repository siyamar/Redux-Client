import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createBooks, deletLatestBook, getBooks, updateLatestBook } from "./latestBooksAPI";

const initialState = {
    latestBooks: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchLatestBooks = createAsyncThunk('latestBooks/fetchLatestBooks',
    async() =>{
        const latestBooks = await getBooks();
        return latestBooks;
    }
)
export const createLatestBooks = createAsyncThunk('latestBooks/createLatestBooks',
    async(latestBook) =>{
        const addlatestBooks = await createBooks(latestBook);
        return addlatestBooks;
    }
)
export const deleteLatestBook = createAsyncThunk('latestBooks/deleteLatestBook',
    async(id) =>{
        const deleteBook = await deletLatestBook(id);
        return deleteBook;
    }
)

export const updateLatestBooks = createAsyncThunk('latestBooks/updateLatestBooks',
    async(updatedBook) =>{
        const updated = await updateLatestBook(updatedBook);
        return {updated};
    }
)


const latestBooksSlice = createSlice({
    name: 'latestBooks',
    initialState,
    extraReducers:(builder) =>{
        builder
        .addCase(fetchLatestBooks.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchLatestBooks.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.latestBooks = action.payload;
        })
        .addCase(fetchLatestBooks.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error= action.error?.message
        })
        .addCase(createLatestBooks.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createLatestBooks.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.latestBooks.push(action.payload);
        })
        .addCase(createLatestBooks.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error= action.error?.message
        })
        .addCase(updateLatestBooks.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(updateLatestBooks.fulfilled, (state, action)=>{
            state.isLoading = false;
            const {id, title, author} = action.payload;
            const isBookExist = state.latestBooks.filter((book)=> book.id === id)
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        })
        .addCase(updateLatestBooks.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error= action.error?.message
        })
        // .addCase(deleteLatestBook.pending, (state)=>{
        //     state.isLoading = true;
        //     state.isError = false;
        // })
        // .addCase(deleteLatestBook.fulfilled, (state, action)=>{
        //     state.isLoading = false;
        //     state.latestBooks.push(action.payload);
        // })
        // .addCase(deleteLatestBook.rejected, (state, action)=>{
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.error= action.error?.message
        // })
    }

})

export default latestBooksSlice.reducer;