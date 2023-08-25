'use client'
interface WidgetContentProps{
    data:string
}
const WidgetContent:React.FC<WidgetContentProps> = ({data}) => {
    return ( 
        <>
        <span className=" text-5xl font-normal min-w-[100px] ms-4">{data}</span>
        </>
            
        
     );
}
 
export default WidgetContent;