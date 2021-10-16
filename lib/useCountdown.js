import { useState, useEffect } from 'react';
import {calculateTimeLeft} from '@/utils/index'

export function useCountdown(readyTime) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(readyTime).valueOf())

  useEffect(() => {
    if (readyTime > new Date().getTime()) {
        var timeOutId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(readyTime.valueOf()));
        }, 1000) 
    } else clearInterval(timeOutId);

    return () => {
        clearInterval(timeOutId);
    };
    
  },[]);

  return timeLeft;

}