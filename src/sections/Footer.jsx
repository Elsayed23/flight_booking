import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {

    const links = footerLinks.map((link, idx) => {
        return (
            <li key={idx} className='md:text-lg text-slate-700 cursor-pointer'>{link}</li>
        )
    })

    return (
        <footer className="py-7 px-4 md:px-5 border-t-2 border-dotted">
            <div className="flex items-center justify-center flex-col gap-3 xl:gap-0 xl:flex-row lg:justify-between">
                <p className='text-slate-700 md:text-lg text-center'>Copyright © 2023 Luxury Airs . All rights reserved.</p>
                <h3 className='text-blue-500 font-bold'>Made by ElsayedKewan</h3>
                <ul className='flex items-center gap-3 xl:gap-5 flex-wrap justify-center'>
                    {links}
                </ul>
            </div>
        </footer>
    )
}

export default Footer