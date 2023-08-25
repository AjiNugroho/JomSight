'use client'
import React from 'react';
import WidgetCard from './WidgetCard';
import WidgetContent from './WidgetContent';
import WidgetFoot from './WidgetFoot';
import WidgetHead from './WidgetHead';

interface WidgetProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  growth:number;
  isGrow:boolean;
  bgColor?:string;
}

const WidgetComponent:React.FC<WidgetProps> = ({icon,value,label,growth,isGrow,bgColor}) => {
    return ( 
        <WidgetCard bgColor={bgColor}>
            <div className={`flex flex-col h-full items-center pb-2 ${bgColor?'text-black':''}`}>
                <div className='w-full'>
                    <WidgetHead icon={icon} desc={label}/>
                </div>
                <div className='flex w-full py-2 gap-2 justify-center'>
                    <WidgetContent data={value}/>
                    <WidgetFoot growtValue={growth} isGrow={isGrow}/>
                </div>
                
            </div>
        </WidgetCard>
     );
}
 
export default WidgetComponent;