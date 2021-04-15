import axios from 'axios';
import { fetchState } from '@constanst';

export const fetchMiddleware = (_storeAPI) => (next) => async (action) => {
    if (!action.fetchInfo) {
        return next(action);
    }
    
    if(!localStorage.getItem('JessTk')) {
        next('/')
    } 
    
    const { requestConfig, requestId, name } = action;
    let response;
    await axios(requestConfig).then((res) => {
        response = res;
    })
    .catch((e) => {
        next({
            type: `fetch/Failure`,
            payload: {
                requestId,
                data: {
                    message: e.message
                },
                fetchState: fetchState.Failure
            }
        })
    });

    if (response.code === 200) {
        next({
            type: `fetch/fetchSuccess`,
            payload: {
                requestId,
                data: response.data,
                fetchState: fetchState.Success
            }
        })
        if (name) {
            next({
                type: `${name}/fetchSuccess`,
                payload: response.data
            })
        }
    } else {
        next({
            type: `fetch/Failure`,
            payload: {
                requestId,
                data: response.data,
                fetchState: fetchState.Failure
            }
        })
    }
    
    console.log(action, action)
    return next(action)
}