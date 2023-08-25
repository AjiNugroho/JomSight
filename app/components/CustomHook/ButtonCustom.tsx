'use client'
import React from 'react';
import { useButton } from 'react-aria';
import { AriaButtonProps } from 'react-aria';

interface ButtonProps extends AriaButtonProps {
    buttonRef: React.RefObject<HTMLButtonElement>;
    className?: string;
    children: React.ReactNode;
  }
  

const ButtonCustom:React.FC<ButtonProps> = ({ buttonRef, className, children, ...ariaProps }) => {
    const { buttonProps } = useButton(ariaProps, buttonRef);
    return ( 
    <button {...buttonProps} ref={buttonRef} className={className}>
      {children}
    </button>
     );
}
 
export default ButtonCustom;