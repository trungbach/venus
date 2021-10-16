import useSWR  from 'swr';
import { getListCastle } from '@/pages/api/castle' 

export const useCastle = (url) => {
    
    const {data, error} = useSWR(url, getListCastle)
    return { data: data?.data, 
             total_items: data?.total_items, error,
             loading: !data && !error
           }
}
