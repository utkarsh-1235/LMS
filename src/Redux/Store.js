import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slice/authslice';
const store = configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true
})

export default store;