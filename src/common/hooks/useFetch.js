import { useCallback, useEffect, useRef } from 'react';
import md5 from 'blueimp-md5';
import { FetchState } from '@constanst';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import "antd/dist/antd.css";

export function useFetch(options) {
    const requestIdRef = useRef(md5(new Date));
    const requestId = requestIdRef.current;
    const { name = '', ...option } = options;
    console.log(requestId, 555, name)
    const dispatch = useDispatch();

    const fetchState = useSelector(state => state.fetch[requestId] || {}, shallowEqual);
    console.log(fetchState)

    useEffect(() => {
        dispatch({
            type: 'fetch/fetchInit',
            payload: {
                requestId,
                data: {},
                fetchState: FetchState.Init
            }
        });
    }, [requestId])

    const makeRequest = useCallback(
        (extraOption) => {
            const requestConfig = Object.assign({}, option, extraOption);

            const action = {
                fetchInfo: {
                    requestId,
                    requestConfig,
                    name
                }
            };
            dispatch(action);
        },
        [requestId],
    )

    function resetRequestId() {
        requestIdRef.current = md5(new Date);
    }

    return [fetchState, makeRequest, resetRequestId]
}
