import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '@constanst';

export const fetch = createSlice({
    name: 'fetch',
    initialState: {
        data: {}
    },
    reducers: {
			fetchInit(state, action) {
					const { payload } = action;
					const { requestId } = payload;
					state[requestId] = {
						data: {},
						fetchState: FetchState.Init
					}
			},
			fetchLoading(state, action) {
				const { payload } = action;
				const { requestId, fetchState } = payload;
				state[requestId] = {
					data: {},
					fetchState: FetchState.Loading
				}
		},
      fetchSuccess(state, action) {
        const { payload } = action;
        const { requestId, data, fetchState } = payload;
        state[requestId] = {
            data,
            fetchState: FetchState.Success
        }
      },

      fetchFailure(state, action) {
        const { payload } = action;
        const { requestId, data, fetchState } = payload;
        state[requestId] = {
            data,
            fetchState: FetchState.Failure
        }
      },
    },
}).reducer;