import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosAirplane } from "react-icons/io";
import Button from './Button';



const PlansBox = ({
    imgUrl,
    title,
    subTitle,
    con,
    price
}) => {
    return (
        <div className='rounded-lg shadow-md bg-white'>
            <div className="p-3">
                <img src={imgUrl} alt="img" className='rounded-lg h-80 object-cover w-full' />
                <div className="p-3 md:p-4">
                    <div className="flex justify-between items-center flex-wrap">
                        <h2 className='text-slate-800 text-lg md:text-xl font-bold'>{title}</h2>
                        <div className="flex items-center gap-1">
                            {
                                [1, 2, 3, 4, 5].map(star => {
                                    return <IoIosStar key={star} size={20} color='#3b82f6' />
                                })
                            }
                        </div>
                    </div>
                    <h3 className='text-slate-400'>{subTitle}</h3>
                    <p className='md:text-lg my-5 text-slate-700'>
                        {con}
                    </p>
                    <div className="flex items-center pb-4 gap-1 border-b-2 border-dotted">
                        <span className='text-blue-500 text-xl md:text-2xl font-bold'>
                            ${price}
                        </span>
                        /
                        Hour
                    </div>
                    <Button label='Book Now' icon={<IoIosAirplane size={20} color='white' />} className='mt-4' />
                </div>
            </div>
        </div>
    )
}

export default PlansBox