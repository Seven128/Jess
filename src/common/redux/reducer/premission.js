import { createSlice } from '@reduxjs/toolkit';

export const premission = createSlice({
    name: 'permission',
    initialState: {
        data: {a:1}
    },
    reducers: {
      fetchSuccess(state, action) {
        const { payload } = action;
        state.data = payload;
      },
    },
}).reducer;