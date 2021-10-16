import { getMyCastles } from '@/pages/api/castle' 
import useSWR, {useSWRInfinite}  from 'swr';

export const useMyCastle = (url) => {
    
    const {data, error} = useSWR(url, getMyCastles)
    return { data: data || [], 
            //  total_items: data?.total_items, error,
             loading: !data && !error
           }
    
  }
  