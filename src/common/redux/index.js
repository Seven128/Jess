import { configureStore } from '@reduxjs/toolkit';
import { fetchMiddleware, historyRouteMiddleware } from './middleware';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { permission, fetch } from './reducer';

export const history = createBrowserHistory();

const store = configureStore({
    preloadedState: {
        router: {}
    },
    reducer: {
        permission,
        fetch,
        router: connectRouter(history)
    },
    middleware: (getDefaultMiddleware) => [fetchMiddleware, historyRouteMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;