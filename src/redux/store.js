import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";

// let store = configureStore({
//     rootReducer: {
//         login: loginReducer,
//     },
// });

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});
export default store;
