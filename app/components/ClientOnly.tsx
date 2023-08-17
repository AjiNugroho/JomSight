'use client'
import { useEffect, useState } from "react";
interface clientOnlyProps{
    children: React.ReactNode;
}
const ClientOnly:React.FC<clientOnlyProps> = ({children}) => {

    const [hasMounted,sethasMounted] = useState(false)

    useEffect(()=>{
        sethasMounted(true)
    },[])

    if(!hasMounted){
        return null
    }
    return ( 
    <div className="w-full">
        {children}
    </div>
    );
}
 
export default ClientOnly;