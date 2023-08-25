'use client'

import { ReactNode } from "react";
import WidgetFilter from "./WidgetFilter";
import WidgetFilterV2 from "./WidgetFilterV2";

interface WidgetHeadProps{
    icon:ReactNode
    desc:string
}
const WidgetHead:React.FC<WidgetHeadProps> = ({icon,desc}) => {
    return ( 
        <div className='flex w-full px-2 my-2 items-center justify-center lg:m-4 lg:gap-3 lg:justify-normal relative'>
            <span className="rounded-full p-2 hidden lg:block">
                {icon}
            </span>
            <span className="text-lg font-normal">{desc}</span>
            <div className="absolute top-0 right-8">
                <WidgetFilterV2/>
            </div>
        </div>
     );
}
 
export default WidgetHead;