import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEventsByKeyword } from "../../client/event";

const initialState = {
    isLoading: false,
    eventData: [],
    paginationData:{},
    isAnyEventExisted: true,
    searchPhrase: 'bocelli'
}

export const eventResource = createAsyncThunk(
    'event/eventResource',
    async (params, thunkAPI) => {
        try {
            const resp = await getEventsByKeyword(params.keyword ? params.keyword : '', params.page);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
    },
);

const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers: {
        setSearchPhrase: (state, action) => {
            state.searchPhrase = action.payload
        },
    },
    extraReducers: {
        [eventResource.pending]: (state) => {
            state.isLoading = true;
        },
        [eventResource.fulfilled]: (state, action) => {
            console.log(action.payload.page)
            if ('_embedded' in action.payload){
                state.eventData = action.payload._embedded.events;
                state.paginationData = action.payload.page;
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
export const { setSearchPhrase } = eventSlice.actions;
