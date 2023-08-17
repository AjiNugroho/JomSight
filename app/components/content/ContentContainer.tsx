'use client'

interface contentContainerProps{
    children:React.ReactNode
}

const ContentContainer:React.FC<contentContainerProps> = ({children}) => {
    return ( 
    <div>
        {children}
    </div>);
}
 
export default ContentContainer;