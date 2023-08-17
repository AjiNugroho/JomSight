'use client'

import { ReactNode } from "react";

interface WidgetHeadProps{
    icon:ReactNode
    desc:string
}
const WidgetHead:React.FC<WidgetHeadProps> = ({icon,desc}) => {
    return ( 
        <div className='flex w-full px-2 gap-4 m-4 items-center'>
            <span className="rounded-full bg-white/50 text-white p-2">
                {icon}
            </span>
            <span className="text-xl font-bold">{desc}</span>
        </div>
     );
}
 
export default WidgetHead;