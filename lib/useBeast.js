import useSWR  from 'swr';
import { getListBeasts } from '@/pages/api/beast' 

export const useBeast = (url) => {
    
    const {data, error} = useSWR(url, getListBeasts)
    return { data: data?.data, 
            //  total_items: data?.total_items, error,
             loading: !data && !error
           }
}
