import axios from 'axios';

export const fetchMiddleware = (_storeAPI) => (next) => async (action) => {
    if (!action.fetchInfo) {
        return next(action);
    }
    const { requestConfig, requestId, name } = action.fetchInfo;
    next({
        type: `fetch/fetchLoading`,
        payload: {
            requestId,
        }
    })
    
    if(!localStorage.getItem('JessTk')) {
        next('/')
    } 
    
    let response;
    await axios(requestConfig).then((res) => {
        response = res.data;
    })
    .catch((e) => {
        next({
            type: `fetch/Failure`,
            payload: {
                requestId,
                data: {
                    message: e.message
                } 
            }
        })
    });

    if (response) {
        console.log(response)
        if (response.code === 200) {
            next({
                type: `fetch/fetchSuccess`,
                payload: {
                    requestId,
                    data: response.data,
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
                }
            })
        }
    }
    
}