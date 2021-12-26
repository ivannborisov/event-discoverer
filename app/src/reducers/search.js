import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: {
            query: ""
        }
    },
    reducers: {
        typing: (state, action) => {
           if(state.value !== action.payload) {
            state.value = action.payload
            }
        }
    }
})

export const { typing } = searchSlice.actions;

export default searchSlice.reducer;