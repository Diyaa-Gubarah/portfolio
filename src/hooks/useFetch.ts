import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
    const [response, setResponse] = useState<AxiosResponse<any> | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        axios
            .get(url, { signal })
            .then((res) => setResponse(res))
            .catch((err) => setError(err));

        return () => abortController.abort();
    }, [url]);

    return { response, error };
};

export default useFetch
