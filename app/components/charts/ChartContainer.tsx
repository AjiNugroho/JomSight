'use client'

interface ChartContainerProps{
    children: React.ReactNode;
}

const ChartContainer:React.FC<ChartContainerProps> = ({children}) => {
    return ( 
        
        <div className=" bg-[#ffd682] rounded-lg border h-full w-full mb-4 text-[#121212]">
            {children}
        </div>
        
        
     );
}
 
export default ChartContainer;