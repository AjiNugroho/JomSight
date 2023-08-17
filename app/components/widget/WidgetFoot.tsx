'use client'

import {BsArrowDownShort,BsArrowUpShort} from 'react-icons/bs'

interface WidgetFootProps{
    growtValue:number
    isGrow:boolean
}

const WidgetFoot:React.FC<WidgetFootProps> = ({growtValue,isGrow}) => {
    return ( 
        <div className="flex w-full px-2 mx-4 my-2 items-center gap-1">
            {isGrow?(
            <div className='text-lime-500 flex items-center'>
                <BsArrowUpShort size={24}/>
                {growtValue}%
            </div>
            ):(
            <div className='text-red-500 flex items-center'>
                <BsArrowDownShort size={24}/>
                {growtValue}%
            </div>
            )}
            <span>growth</span>
        </div>
     );
}
 
export default WidgetFoot;