import { useCallback, useEffect } from 'react';
import md5 from 'blueimp-md5';
import { createFetchAction } from '@utils';
import { fetchState } from '@constanst';
import { useDispatch } from 'react-redux';

export function useFetch(options) {
    let requestId = md5(new Date);
    const { name = '', ...option } = options;
    console.log(requestId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'fetch/fetchInit',
            payload: {
                requestId,
                data: {},
                fetchState: fetchState.Init
            }
        });
    }, [requestId])

    const makeRequest = useCallback(
        async (extraOption) => {
            const requestConfig = Object.assign({}, option, extraOption);

            const action = createFetchAction({
                requestId,
                requestConfig,
                name
            });
            await dispatch(action);
        },
        [requestId],
    )

    function resetRequestId() {
        requestId = md5(new Date);
    }
}
