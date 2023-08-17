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
}

const WidgetComponent:React.FC<WidgetProps> = ({icon,value,label,growth,isGrow}) => {
    return ( 
        <WidgetCard>
            <div className='flex flex-col'>
                <WidgetHead icon={icon} desc={label}/>
                <WidgetContent data={value}/>
                <WidgetFoot growtValue={growth} isGrow={isGrow}/>
            </div>
        </WidgetCard>
     );
}
 
export default WidgetComponent;