import React from 'react'
import plane from '../assets/images/mask.png'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from '../components/Button';


const About = () => {
    return (
        <div className='py-24'>
            <div className="container mx-auto px-4 flex items-center flex-col-reverse gap-9 lg:gap-5 lg:flex-row">
                <img src={plane} alt="plan" className='lg:w-2/4 relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[url(./assets/images/wallpaper.jpg)] before:bg-blend-screen before:bg-no-repeat' />
                <div className="flex flex-col ">
                    <h3 className='uppercase text-blue-500 font-extrabold mb-5'>about us</h3>
                    <h1 className='text-slate-700 text-3xl md:text-4xl leading-snug font-semibold mb-6 lg:max-w-xl'>We Are Here To Bring You All The Comfort And Pleasure</h1>
                    <p className='lg:max-w-3xl text-gray-600 md:text-xl leading-normal mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos
                        ratione, excepturi explicabo non quasi velit pariatur ipsa mollitia voluptate nemo
                        similique recusandae, doloribus porro expedita eius. Magnam, laudantium velit.
                    </p>
                    <ul className='flex flex-col gap-3 mb-7'>
                        {
                            [1, 2, 3].map((list) => {
                                return (
                                    <li key={list} className='text-base text-slate-800 lg:text-lg list-none flex items-center gap-2'>
                                        <IoCheckmarkCircleOutline size={30} color='#3b82f6' />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Button label='Discover More' className='w-fit shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default About