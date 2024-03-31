import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privateSlice from "./privacy";

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privateSlice.reducer
    }
});

export default counterStore;