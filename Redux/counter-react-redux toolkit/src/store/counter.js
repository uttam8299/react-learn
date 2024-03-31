import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterValue: 0},
    reducers: {
        increment: (store) => {
            store.counterValue++;
        },
        decrement: (store) => {
            store.counterValue--;
        },
        add: (store, action) => {
            store.counterValue += Number(action.payload.num);
        },
        subtract: (store, action) => {
            store.counterValue -= Number(action.payload.num);
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;