'use client';

interface WidgetCardprops{
    children: React.ReactNode;
}

const WidgetCard:React.FC<WidgetCardprops> = ({children}) => {
    return ( 
        <div className="bg-[#52736e] rounded-lg border w-auto sm:h-auto lg:w-1/4 lg:h-[200px] text-white">
            {children}
        </div>
     );
}
 
export default WidgetCard;