import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEventsByKeyword } from "../../client/event";

const initialState = {
    isLoading: false,
    eventData: [],
    isAnyEventExisted: true,
}

export const eventResource = createAsyncThunk(
    'event/eventResource',
    async (params, thunkAPI) => {
        try {
            const resp = await getEventsByKeyword(params.keyword, params.page);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
    },
);

const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers: {},
    extraReducers: {
        [eventResource.pending]: (state) => {
            state.isLoading = true;
        },
        [eventResource.fulfilled]: (state, action) => {
            if ('_embedded' in action.payload){
                state.eventData = action.payload._embedded.events;
                state.isLoading = false;
            } else {
                state.isAnyEventExisted = false;
            }
        },
        [eventResource.rejected]: (state) => {
            state.isLoading = true;
        },
    },
})

export default eventSlice.reducer;