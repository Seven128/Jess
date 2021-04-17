import { createSlice } from '@reduxjs/toolkit';

export const info = createSlice({
    name: 'info',
    initialState: {
        data: {}
    },
    reducers: {
      fetchSuccess(state, action) {
        const { payload } = action;
        state.data = payload;
      },
    },
}).reducer;