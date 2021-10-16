import useSWR, {useSWRInfinite}  from 'swr';
import { getListMarket } from '@/pages/api/market' 

export const useMarket = (url) => {
    
    const {data, error} = useSWR(url, getListMarket)
    return { listMarket: data?.data, 
             total_items: data?.total_items, error,
             loading: !data && !error
           }
    
}
