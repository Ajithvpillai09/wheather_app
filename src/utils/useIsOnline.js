import { useEffect,useState } from "react";

export default function useIsOnline(){
    const [isOnline,setIsOnline] = useState(true)

    const handleChange = (value)=>{
        setIsOnline(value)
    }

    useEffect(()=>{
       window.addEventListener('online' ,()=> handleChange(true))
       window.addEventListener('offline',()=> handleChange(false))
       return()=>{
        window.removeEventListener('online',handleChange)
        window.removeEventListener('offline',handleChange)
       }
    },[])


    return isOnline
}