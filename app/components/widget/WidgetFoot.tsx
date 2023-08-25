'use client'

import {BiSolidUpArrow,BiSolidDownArrow} from 'react-icons/bi'

interface WidgetFootProps{
    growtValue:number
    isGrow:boolean
}

const WidgetFoot:React.FC<WidgetFootProps> = ({growtValue,isGrow}) => {
    return ( 
        <div className="flex px-4">
            {isGrow?(
            <div className='text-lime-500 flex items-center gap-1'>
                <BiSolidUpArrow size={20}/>
                <span className='text-base font-normal'>{growtValue}%</span>
                
                
            </div>
            ):(
            <div className='text-red-500 flex items-center gap-1'>
                <BiSolidDownArrow size={20}/>
                <span className='text-base font-normal'>{growtValue}%</span>
                
            </div>
            )}
        </div>
     );
}
 
export default WidgetFoot;