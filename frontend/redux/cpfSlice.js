import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cpf: null,
};

const cpfSlice = createSlice({
    name: 'cpf',
    initialState,
    reducers: {
        recordCPF: (state, action) => {
            state.cpf = action.payload.cpf;
        },
        clearCPF: (state) => {
            state.cpf = null;
        },
    },
});


export const { recordCPF, clearCPF } = cpfSlice.actions;

export default cpfSlice.reducer;
