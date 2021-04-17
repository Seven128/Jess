import axios from 'axios';
import md5 from 'blueimp-md5';
import { TestAPI } from '@constanst';

const requestMap = new Map();

export const fetchMiddleware = (_storeAPI) => (next) => async (action) => {
    // 如果不是从useFetch进来的，那么就是路由跳转dispatch或者普通的dispatch
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
    
    // 非登录接口判断是否有token
    if(requestConfig.url !== TestAPI.Login && !localStorage.getItem('JessTk')) {
        return next('/')
    } 
    
    let request,response;
    // 如果是相同的请求那么就不重复发
    const requestKey = md5(requestConfig);
    if (requestMap.get(requestKey)) {
        request = requestMap.get(requestKey);
    } else {
        request = axios(requestConfig).then((res) => {
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
        requestMap.set(requestKey, request);
    }
    await request;

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

    requestMap.delete(requestKey);
}