import React from 'react'
import { featuresData } from '../constants'
import FeaturesBox from '../components/FeaturesBox'
import SecHeader from '../components/SecHeader'

const Features = () => {

    const featureBox = featuresData.map((feature, idx) => {
        return (
            <FeaturesBox key={idx} {...feature} />
        )
    })

    return (
        <div className='py-24'>
            <div className="container mx-auto px-4">
                <SecHeader title='Our Features' subTitle='our priceless features' />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                    {featureBox}
                </div>
            </div>
        </div>
    )
}

export default Features