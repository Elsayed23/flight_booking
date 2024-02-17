import React from 'react'

const Button = ({ label, icon, transparentBG, className }) => {
    return (
        <button className={`text-white border-2 flex items-center gap-2 px-7 py-3 text-lg font-bold rounded-full border-blue-500 ${transparentBG ? 'bg-transparent' : 'bg-blue-500'} ${className}`}>
            {
                icon && icon
            }
            {label}
        </button>
    )
}

export default Button