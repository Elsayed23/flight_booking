import React from 'react'
import { plansData } from '../constants'
import PlansBox from '../components/PlansBox'

const Plans = () => {

    const plans = plansData.map((plan, idx) => {
        return (
            <PlansBox key={idx} {...plan} />
        )
    })

    return (
        <div className='py-24'>
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h4 className='text-xl text-blue-500 font-bold'>Our Plans</h4>
                    <h1 className='capitalize font-semibold text-slate-700 text-3xl md:text-4xl my-4'>flights for everyone</h1>
                    <p className='md:max-w-sm md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis
                        quas nisi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {plans}
                </div>
            </div>
        </div>
    )
}

export default Plans