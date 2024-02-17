import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import plane from '../assets/images/plane.png'

const Hero = () => {
    return (
        <>
            <Navbar />
            <section className={` bg-[#141b2b] relative z-10 before:absolute before:top-0 before:left-0 before:bg-[url(./assets/images/abs.png)] before:w-full before:h-full before:-z-10 before:opacity-10`}>
                <div className="container py-36 lg:py-0 px-4 mx-auto flex flex-col items-center lg:flex-row relative min-h-screen gap-12 lg:gap-0">
                    <div className="flex flex-col gap-8 flex-1">
                        <h2 className='capitalize text-blue-500 font-semibold text-2xl md:text-3xl'>welcome to our website</h2>
                        <h1 className='text-white capitalize text-4xl md:text-5xl font-bold leading-snug lg:leading-normal md:max-w-md'>luxury experience with our services.</h1>
                        <p className='text-white text-lg md:max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla ipsa unde
                            inventore minus commodi saepe? Eos cumque aliquam consequatur id optio dolorum
                            modi quod?</p>
                        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                            <Button label='Book Flight' />
                            <Button label='Contact Us' transparentBG={true} />
                        </div>
                    </div>
                    <img src={plane} alt="" className='flex-1 w-full lg:w-2/4' />
                </div>
            </section>
        </>
    )
}

export default Hero