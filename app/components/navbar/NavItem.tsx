'use client'
import { ReactNode, useState } from "react";
import {HiChevronRight,HiChevronDown} from 'react-icons/hi'

interface NavbarItemProps{
    iconClassName:ReactNode;
    menuName:string;
    children?:ReactNode;
}

const NavItem: React.FC<NavbarItemProps> = ({iconClassName,menuName,children}) => {
    
    return ( 
    <div className="w-full px-4 group relative hover:text-[#ffdb8f]">
        <div className="absolute h-[20px] w-[20px] top-3 left-0 
        bg-gradient-to-r from-[#ffdb8f] from-10% via-white/20 via-10% to-transparent to-80% hidden group-hover:block ">

        </div>
        <button
        className="flex justify-start w-full p-1 text-left mt-2
        transition-transform transform duration-300 group-hover:translate-x-2"
        >
            <span className="mr-2">{iconClassName}</span>
            <span className="font-bold text-md">{menuName}</span>
        </button>
    </div> 
    );
}
 
export default NavItem;