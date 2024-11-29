
import { configureStore } from '@reduxjs/toolkit';
import cpfReducer from './cpfSlice';

const store = configureStore({
    reducer: {
        cpf: cpfReducer,
    },
});

export default store;
