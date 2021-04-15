import React, { useEffect } from 'react';
import { useFetch } from '@common/hooks';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

export default function Login() {
    const { data } = useSelector(state => state.premission, shallowEqual);
    const dispatch = useDispatch();
    useFetch({});
    useFetch({});
    useEffect(() => {
        dispatch({
            type: 'permission/fetchSuccess',
            payload: {b:1}
        });
    }, [])
    console.log(data)
    return (
        <div>
            sdaadsf
        </div>
    )
}
