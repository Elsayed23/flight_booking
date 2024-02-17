import React from 'react'

const FeaturesBox = ({
    icon,
    title,
    con
}) => {
    return (
        <div className='py-8 px-4 flex flex-col gap-5 items-center shadow-xl rounded-md bg-white hover:scale-105 duration-300 hover:shadow-2xl'>
            {icon}
            <h3 className='text-slate-700 text-xl md:text-2xl font-bold'>{title}</h3>
            <p className='text-base md:text-lg max-w-sm mx-auto text-center text-slate-900'>{con}</p>
        </div>
    )
}

export default FeaturesBox