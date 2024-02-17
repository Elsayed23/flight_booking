import { IoBedOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";



export const navLinks = [
    {
        href: '/',
        label: 'home'
    },
    {
        href: '/',
        label: 'how to'
    },
    {
        href: '/',
        label: 'services'
    },
    {
        href: '/',
        label: 'blog'
    },
    {
        href: '/',
        label: 'contact'
    },
    {
        href: '/',
        label: 'newspaper'
    },
    {
        href: '/',
        label: 'about'
    },
]

export const featuresData = [
    {
        icon: <IoBedOutline size='60' className="text-blue-500" />,
        title: 'Hotels on the House',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
    {
        icon: <IoShieldCheckmarkOutline size='60' className="text-blue-500" />,
        title: 'Safe to Trust',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
    {
        icon: <IoEarth size='60' className="text-blue-500" />,
        title: 'Worldwide Customers',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
]

export const plansData = [
    {
        imgUrl: require('../assets/images/plan1.jpg'),
        title: 'private charter jet',
        subTitle: 'Charter B1732',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.',
        price: '280',
    },
    {
        imgUrl: require('../assets/images/plan2.jpg'),
        title: 'Medical Chopper',
        subTitle: 'Charter B1732',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.',
        price: '460',
    },
    {
        imgUrl: require('../assets/images/plan3.jpg'),
        title: 'private plan',
        subTitle: 'Charter B1732',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.',
        price: '600',
    },
]

export const blogsData = [
    {
        imgUrl: require('../assets/images/01.jpg'),
        userName: 'Elsayed Kewan',
        date: 'Dec 12, 2023',
        title: 'most visited countries in last 3 years',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
    {
        imgUrl: require('../assets/images/02.jpg'),
        userName: 'Mohamed Mohsen',
        date: 'Oct 5, 2023',
        title: 'most visited countries in last 3 years',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
    {
        imgUrl: require('../assets/images/03.jpg'),
        userName: 'Mr.Beast',
        date: 'Aug 24, 2023',
        title: 'most visited countries in last 3 years',
        con: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum ullam corrupti similique dolor illo, laudantium perspiciatis magnam assumenda harum.'
    },
]

export const footerLinks = ['Terms and conditions', 'Long Term Contracts', 'Copyright Policy', 'Customer Support']