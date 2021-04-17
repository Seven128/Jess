import { configureStore } from '@reduxjs/toolkit';
import { fetchMiddleware, historyRouteMiddleware } from './middleware';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { premission, fetch } from './reducer';

export const history = createBrowserHistory();

const store = configureStore({
    reducer: {
        premission,
        fetch,
        router: connectRouter(history)
    },
    middleware: (getDefaultMiddleware) => [fetchMiddleware, historyRouteMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;