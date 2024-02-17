import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
    return (
        <div className='py-48 bg-[url(./assets/images/sky3.jpg)] bg-center bg-fixed relative before:absolute before:bg-black before:bg-opacity-60 before:w-full before:h-full before:left-0 before:top-0'>
            <div className="px-4 md:px-5 flex justify-between relative items-center gap-8 flex-wrap lg:flex-nowrap">
                <h1 className='text-4xl md:text-6xl text-white font-bold md:text-center'>It's Time To Enjoy Your Freedom!</h1>
                <div className="xl:flex-1 flex items-center gap-5 flex-wrap lg:flex-nowrap w-full">
                    <input type="email" className='py-3 px-4 bg-white rounded-md focus:outline-none w-full lg:w-fit lg:min-w-96' placeholder='Email address' />
                    <Button label='Join To Our Newspaper' className='text-nowrap rounded-md w-full lg:w-fit justify-center' />
                </div>
            </div>
        </div>
    )
}

export default Subscribe