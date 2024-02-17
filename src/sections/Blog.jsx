import React from 'react'
import SecHeader from '../components/SecHeader'
import { blogsData } from '../constants'
import BlogBox from '../components/BlogBox'

const Blog = () => {

    const blogs = blogsData.map((plan, idx) => {
        return (
            <BlogBox key={idx} {...plan} />
        )
    })

    return (
        <div className='py-24'>
            <div className="container mx-auto px-4">
                <SecHeader title='Our Blog' subTitle='Our Latest Posts' />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {blogs}
                </div>
            </div>
        </div>
    )
}

export default Blog