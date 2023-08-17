'use client';

interface WidgetCardprops{
    children: React.ReactNode;
}

const WidgetCard:React.FC<WidgetCardprops> = ({children}) => {
    return ( 
        <div className="bg-white/20 rounded-lg border w-1/4 h-[200px] backdrop-blur-md">
            {children}
        </div>
     );
}
 
export default WidgetCard;