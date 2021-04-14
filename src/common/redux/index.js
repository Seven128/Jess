import { configureStore } from '@reduxjs/toolkit';

import { premission } from './reducer';

const store = configureStore({
    reducer: {
        premission
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})