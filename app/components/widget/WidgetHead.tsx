'use client'

import { ReactNode } from "react";

interface WidgetHeadProps{
    icon:ReactNode
    desc:string
}
const WidgetHead:React.FC<WidgetHeadProps> = ({icon,desc}) => {
    return ( 
        <div className='flex w-full px-2 my-2 items-center sm:justify-center lg:justify-normal lg:m-4 lg:gap-3'>
            <span className="rounded-full bg-white/50 text-white p-2 hidden lg:block">
                {icon}
            </span>
            <span className="text-xl font-bold">{desc}</span>
        </div>
     );
}
 
export default WidgetHead;