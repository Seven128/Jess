import { configureStore } from '@reduxjs/toolkit';
import { fetchMiddleware, historyRouteMiddleware } from './middleware';

import { premission, fetch } from './reducer';

const store = configureStore({
    reducer: {
        premission,
        fetch
    },
    middleware: (getDefaultMiddleware) => [fetchMiddleware, historyRouteMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;