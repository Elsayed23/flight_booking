import React from 'react'

const SecHeader = ({ title, subTitle }) => {
    return (
        <div className="mb-12 text-center">
            <h4 className='text-xl text-blue-500 font-bold'>{title}</h4>
            <h1 className='capitalize font-semibold text-slate-700 text-3xl md:text-4xl my-4'>{subTitle}</h1>
            <p className='md:max-w-sm md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis
                quas nisi.</p>
        </div>
    )
}

export default SecHeader