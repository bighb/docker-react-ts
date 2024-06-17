// hooks/useFetch.ts
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useFetch = (url: string) => {
    const { data, error } = useSWR(url, fetcher);
    let dataResponse = []
    if (data && data.code === 200) {
        dataResponse = data.data
    }

    return {
        data: dataResponse,
        error,
        isLoading: !error && !data,
        isError: error
    };
};