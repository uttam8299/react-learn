import { createSlice } from "@reduxjs/toolkit";

const privateSlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (store) => {
            return store = !store;
        }
    }
});

export const privacyActions = privateSlice.actions;

export default privateSlice;