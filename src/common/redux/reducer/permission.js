import { createSlice } from '@reduxjs/toolkit';

export const permission = createSlice({
    name: 'permission',
    initialState: {
        data: {a:1}
    },
    reducers: {
      fetchSuccess(state, action) {
        const { payload } = action;
        window.localStorage.set('JessTk', payload.token)
        state.data = payload;
      },
    },
}).reducer;