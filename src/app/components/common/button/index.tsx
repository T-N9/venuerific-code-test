import React from 'react'

interface ButtonProps {
    isIcon ?: boolean;
    size: 'lg' | 'md' | 'sm';
    label: string,
    icon ?: React.ReactNode;
    className?: string;
}

const Button = ({ isIcon = false, size, label, icon, className }: ButtonProps) => {

    const buttonSizingClass = (size: string) => {
        switch (size) {
            case 'lg':
                return 'py-4 px-8'
            case'md':
                return 'py-3 px-5'
            case'sm':
                return 'py-2 px-4'
            default:
                return 'h-10 w-10'
        }
    }

    return (
        <button className={`bg-primary flex justify-center items-center gap-2 rounded-xl capitalize hover:bg-blue-500 focus:bg-blue-600 transition-all duration-100 focus:scale-95 text-white font-medium ${buttonSizingClass(size)} ${className}`}>
            {isIcon? <>{icon}</> : null}
            {label}
        </button>
    )
}

export default Button