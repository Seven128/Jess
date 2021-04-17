import { routerMiddleware, push } from 'connected-react-router';
import { history } from '../index';

export const historyRouteMiddleware = (storeAPI) => (next) => (action) => {
    const { getState } = storeAPI;
    if (typeof action === 'string') {
        return routerMiddleware(history)(getState())(next)(push(action))
    }
    next(action)
}