import {configureStore, createSlice} from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

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

const privateSlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (store) => {
            return store = !store;
        }
    }
});

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer, // name: slice.reducer(name -> name of slice)
        privacy: privateSlice.reducer
    }
});

export const counterActions = counterSlice.actions;

export const privacyActions = privateSlice.actions;

export default counterStore;