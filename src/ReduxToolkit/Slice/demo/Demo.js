import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_demo_API, CREATE_demo_API ,GET_SINGLE_demo_API,UPDATE_demo_API} from "../../../Api_url";
// create demo
export const createdemo = createAsyncThunk('createdemo/demo', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(CREATE_demo_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
export const updatedemo = createAsyncThunk('updatedemo/demo', async ({formData,id}, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${UPDATE_demo_API}/${id}`, formData)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get demo
export const getdemo = createAsyncThunk('getdemo/demo', async () => {
    try {
        const response = await axios.get(GET_demo_API);
        return response.data; // Assuming your API response contains a 'demos' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// get single demo
export const getsingledemo = createAsyncThunk('getsingledemo/demo', async (id) => {
    try {
        const response = await axios.get(`${GET_SINGLE_demo_API}/${id}`);
        return response.data; // Assuming your API response contains a 'demos' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete demo
export const deletedemos = createAsyncThunk('deletedemos/demo', async (deletedemoId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://wave-mantra.vercel.app/api/demo/${deletedemoId}`);
        return response.data.message; // Assuming your API response contains a 'demos' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const demoSlice = createSlice({
    name: 'demo',
    initialState: {
        demos: [],
        singledemos:{},
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create demo
            .addCase(createdemo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createdemo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(createdemo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //update demo
            .addCase(updatedemo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatedemo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(updatedemo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //getdemos
            .addCase(getdemo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getdemo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.demos = action.payload;
            })
            .addCase(getdemo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //getsingledemos
            .addCase(getsingledemo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getsingledemo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singledemos = action.payload;
            })
            .addCase(getsingledemo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //delete demos
            .addCase(deletedemos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deletedemos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.demos = state.demos.filter(demos => demos._id !== action.payload);
                // state.status = 'idle'
            })
            .addCase(deletedemos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default demoSlice.reducer;
