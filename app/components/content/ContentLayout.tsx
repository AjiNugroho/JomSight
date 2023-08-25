'use client'

import StickyLeft from "../navbar/Stickyleft";
import { useState, useEffect } from "react";
import TopNav from "../navbar/TopNav";

interface ContentLayoutProps{
    children:React.ReactNode
}

const ContentLayout:React.FC<ContentLayoutProps> = ({children}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false); 
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(prevVisible => !prevVisible);
    };

    const closeSideBar = () =>{
        setSidebarVisible(false)
    }

    useEffect(() => {
        // Add an event listener to check the screen width
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 1024); // Adjust the threshold as needed
        };
    
        // Initial check
        handleResize();
    
        // Attach event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return ( 
    <div className="bg-gray-100 flex h-screen">
        
        <StickyLeft isShow={sidebarVisible} closeNav={closeSideBar} isLargeScreen={isLargeScreen}/>
        
        <div className="flex-grow overflow-y-auto">
            <div className="flex justify-between items-center w-full h-[70px] bg-[#2e5f55] shadow-xl px-2 text-white lg:hidden">
            <TopNav toggle={toggleSidebar}/>
            </div>
            
            {children}
        </div>
        
    </div>);
}
 
export default ContentLayout;