import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import blogService from "../Blogs/blogService"



const initialState={

    blogs:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
export const addBlog=createAsyncThunk("blogs/add",async(blogs,thunkAPI)=>{
try {
    return await blogService.addBlog(blogs)
} catch (error) {
    const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}

})
export const getBlogs=createAsyncThunk("blogs/get",async(_,thunkAPI)=>{
    try {
        return await blogService.getBlogs()
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
    
    })


export const blogSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addBlog.pending,(state)=>{
                state.isLoading=true
        })
        .addCase(addBlog.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.blogs.push(action.payload)
            
        })
        .addCase(addBlog.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.blogs=null
        })
        .addCase(getBlogs.pending,(state)=>{
            state.isLoading=true
    })
    .addCase(getBlogs.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.blogs=action.payload
        
    })
    .addCase(getBlogs.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.message=action.payload
        state.blogs=null
    })
       
    }

})
export const {reset}=blogSlice.actions
export default blogSlice.reducer





