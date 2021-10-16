import { getMyAssets } from '@/pages/api/castle' 
import useSWR, {useSWRInfinite}  from 'swr';

export const useMyAsset = (url) => {
    
    const {data, error} = useSWR(url, getMyAssets)
    return { myAssets: data || [],
        loadingMyAssets: !data && !error
            //  total_items: data?.total_items, error,
           }
    
  }
  