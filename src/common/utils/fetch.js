export function createFetchAction(props) {
    const { requestId, requestConfig } = props;
    return {
        fetchInfo: {
            requestId,
            requestConfig
        }
    }
}