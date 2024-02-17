import React from 'react'
import { navLinks } from '../constants'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = navLinks.map((link, idx) => {
        return (
            <li key={idx} className={`${link.label === 'home' ? 'text-blue-500' : 'text-white'} p-1 capitalize font-semibold text-lg`}>
                {link.label}
            </li>
        )
    })

    return (
        <header className={`py-6 absolute w-full left-0 top-0 z-50 ${isOpen ? 'bg-[#141b2b]' : 'bg-transparent'} duration-700`}>
            <nav>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <h2 className='text-white text-3xl font-bold'>Logo.</h2>
                        <ul className="hidden lg:flex items-center gap-5">
                            {navItems}
                        </ul>
                        {
                            !isOpen
                                ?
                                <RxHamburgerMenu className='lg:hidden text-white cursor-pointer' size='40' onClick={() => { setIsOpen(true) }} />
                                :
                                <FaXmark className='lg:hidden text-white cursor-pointer' size='40' onClick={() => { setIsOpen(false) }} />

                        }
                        <ul className={`lg:hidden flex flex-col gap-5 py-5 shadow-md items-center absolute w-full left-0 top-full bg-[#141b2b] z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-700`}>
                            {navItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar