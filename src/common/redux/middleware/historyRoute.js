import { history } from "@src/router";

export const historyRouteMiddleware = (_storeAPI) => (next) => async (action) => {
    if (typeof action === 'string') {
        history.push(action);
    } else {
        next(action)
    }
}