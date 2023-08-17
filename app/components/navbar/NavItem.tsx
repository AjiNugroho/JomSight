'use client'
import { ReactNode, useState } from "react";
import {HiChevronRight,HiChevronDown} from 'react-icons/hi'

interface NavbarItemProps{
    iconClassName:ReactNode;
    menuName:string;
    children?:ReactNode;
}

const NavItem: React.FC<NavbarItemProps> = ({iconClassName,menuName,children}) => {
    const [isOpen,setIsOpen] = useState(false);

    const toogleOpen=()=>{
        setIsOpen((isOpen)=>!isOpen)
    }
    return ( 
    <div className="relative mt-2">
        <button
        className="flex items-center w-full p-2 text-left transition duration-300 rounded-md 
        hover:border-r-[0.5px] hover:border-b-0 hover:border-l-0 hover:border-t-[0.5px] hover:shadow-lg"
        onClick={toogleOpen}
        >
            <span className="mr-2">{iconClassName}</span>
            <span>{menuName}</span>
            {children && (isOpen ? <HiChevronDown /> : <HiChevronRight />)}
        </button>
    </div> 
    );
}
 
export default NavItem;