'use client'

import { useState } from "react";
import StickyLeft from "./Stickyleft";
import TopNav from "./TopNav";

const NewNavbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false); 

    const toggleSidebar = () => {
        setSidebarVisible(prevVisible => !prevVisible);
    };
    return ( <>
    
    <TopNav toggle={toggleSidebar}/>

    
    <StickyLeft isShow={sidebarVisible}/>
    
    
    </> );
}
 
export default NewNavbar;