import { configureStore } from '@reduxjs/toolkit';
import { fetchMiddleware } from './middleware';
import { permission, fetch, info } from './reducer';

const store = configureStore({
    reducer: {
        permission,
        fetch,
        info,
    },
    middleware: (getDefaultMiddleware) => [fetchMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;