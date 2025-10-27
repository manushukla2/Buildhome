"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-block font-medium transition-all duration-300 text-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700',
    secondary: 'bg-gradient-to-r from-[#d9b95f] to-[#b8902f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-[#e1c66e] hover:to-[#c49a37]',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
