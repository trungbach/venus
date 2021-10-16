import { getRooms } from '@/pages/api/room' 
import useSWR from 'swr';

export const useRoom = (url) => {
    
    const {data, error} = useSWR(url, getRooms)
    return { listRooms: data || [], 
             loading: !data && !error
           }
    
  }
  