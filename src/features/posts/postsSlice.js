import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsAPI"

const initialState = {
    posts:[],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async ()=>{
        const posts = await getPosts();
        return posts;
    }
)

const postsSlice = createSlice({
name: 'posts',
initialState,
extraReducers: (builder) =>{    //async er kajer jonno extraReducers use hoye.
    builder
    .addCase(fetchPosts.pending, (state)=>{
        state.isLoading =true;
        state.isError =false;
    })
    .addCase(fetchPosts.fulfilled, (state, action)=>{
        state.isLoading =false;
        state.posts =action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action)=>{
        state.isLoading =false;
        state.isError =true;
        state.error= action.error?.message;
    })
}                    
})

export default postsSlice.reducer;