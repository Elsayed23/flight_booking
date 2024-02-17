import React from 'react'
import { CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";



const BlogBox = ({
    imgUrl,
    userName,
    date,
    title,
    con
}) => {
    return (
        <div className='rounded-lg shadow-md bg-white'>
            <div className="p-3">
                <img src={imgUrl} alt="img" className='rounded-lg h-80 object-cover w-full' />
                <div className="p-3 md:p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <CiUser size={25} color='#3b82f6' />
                            {userName}
                        </div>
                        <div className="flex items-center gap-1">
                            <IoCalendarOutline size={25} color='#3b82f6' />
                            {date}
                        </div>
                    </div>
                    <h2 className='text-slate-800 text-lg md:text-2xl my-5 font-bold capitalize'>{title}</h2>
                    <p className='md:text-lg mb-4 text-slate-700'>
                        {con}
                    </p>
                    <span className='text-blue-500 font-semibold md:text-lg'>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default BlogBox