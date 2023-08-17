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
        className="flex items-center w-full p-1 text-left transition duration-300 rounded-md border border-[#52736e]
        hover:text-[#ffd682] hover:border-[#ffd682]"
        onClick={toogleOpen}
        >
            <span className="mr-2">{iconClassName}</span>
            <span className="hidden lg:block">{menuName}</span>
            {children && (isOpen ? <HiChevronDown /> : <HiChevronRight />)}
        </button>
    </div> 
    );
}
 
export default NavItem;