'use client';

interface WidgetCardprops{
    children: React.ReactNode;
    bgColor?: string;
}

const WidgetCard:React.FC<WidgetCardprops> = ({children,bgColor}) => {
    return ( 
        <div className={`w-full ${bgColor?bgColor:'bg-[#53736e]'} rounded-xl shadow-lg h-content 
        transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-white`}>
            {children}
        </div>
     );
}
 
export default WidgetCard;