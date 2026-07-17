import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CTAButton from './CTAButton'
import {motion} from 'framer-motion'
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className='min-h-[40vh] w-screen relative bg-(--orange)'>
        <div className='mainDiv py-16 md:py-24 space-y-16 md:space-y-24 relative z-20'>
            <div className='flex flex-col md:flex-row justify-between space-y-8'>
                {/* left */}
                <div className='space-y-6'>
                    {/* logo */}
                    <div className='space-y-4'>
                        <div>
                            <Link to='/' className='bg-amber-300 w-fit rounded overflow-hidden'>
                                <img src="/colorlogo.png" alt="logo" className='h-12 2xl:h-20 object-cover'/>
                            </Link>
                        </div>
                        <div>
                            <p className='text-base font-light text-(--white) w-sm'>Real ingredients. Traditional methods. Honest craftsmanship.</p>
                        </div>
                    </div>
                    {/* social */}
                    <Social/>
                    {/* quick contact */}
                    <div className='flex flex-col gap-2 text-(--white) text-sm 2xl:text-base'>
                        <a href="tel:+9779835463777" className='group flex items-center gap-2 text-(--white)/60 hover:text-(--white)! 
                        transition-all duration-300 ease-in-out text-sm'>
                            <FaPhone className='text-(--white)/60 group-hover:text-(--white) 
                            group-hover:-translate-x-0.5 transition-all duration-300 ease-in-out'/> 
                            <span className='group-hover:translate-x-0.5 transition-all duration-300 ease-in-out'>
                                +977-9835463777
                            </span>
                        </a>
                        <a href="tel:+9779835463778" className='group flex items-center gap-2 text-(--white)/60 hover:text-(--white)! 
                        transition-all duration-300 ease-in-out text-sm'>
                            <FaPhone className='text-(--white)/60 group-hover:text-(--white)
                            group-hover:-translate-x-0.5 transition-all duration-300 ease-in-out'/> 
                            <span className='group-hover:translate-x-1 transition-all duration-200 ease-in-out'>
                                +977-9835463778
                            </span>
                        </a>
                        <a href="mailto:sales.pickle@gmail.com" className='group flex items-center gap-2 text-(--white)/60 hover:text-(--white)! 
                        transition-all duration-300 ease-in-out text-sm'>
                            <IoMdMail className='text-(--white)/60 group-hover:text-(--white)
                            group-hover:-translate-x-0.5 transition-all duration-300 ease-in-out'/> 
                            <span className='group-hover:translate-x-1 transition-all duration-200 ease-in-out'>
                                sales.pickle@pickle.com
                            </span>
                        </a>
                        <p className='group flex items-center gap-2 text-(--white)/60 hover:text-(--white)! 
                        transition-all duration-300 ease-in-out text-sm'>
                            <FaLocationDot className='text-(--white)/60 group-hover:text-(--white)
                            group-hover:-translate-x-0.5 transition-all duration-300 ease-in-out'/>
                            <span className='group-hover:translate-x-1 transition-all duration-200 ease-in-out'>
                                Kathmandu, Nepal
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='space-y-8 md:space-y-16'>
                    {/* up */}
                    <div className='flex flex-col md:flex-row gap-8 md:gap-24'>
                        {/* menu */}
                        <div className='space-y-4'>
                            <h6 className='text-base font-medium text-(--white) '>Menu</h6>
                            <div className='space-y-2 flex flex-col'>
                                {Menu.map((item, index) => (
                                    <Link key={index} to={item.link} className='text-(--white)/60 hover:text-(--white)!
                                    hover:translate-x-2 transition-all duration-200 ease-in-out font-light'>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* for distribution */}
                        <div className='space-y-4'>
                            <h6 className='text-base font-medium text-(--white) '>For distribution</h6>
                            <div className='space-y-2 flex flex-col'>
                                {forDistribution.map((item, index) => (
                                    <Link key={index} to={item.link} className='text-(--white)/60 hover:text-(--white)!
                                    hover:translate-x-2 transition-all duration-200 ease-in-out font-light'>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* support */}
                        <div className='space-y-4'>
                            <h6 className='text-base font-medium text-(--white) '>Support</h6>
                            <div className='space-y-2 flex flex-col'>
                                {Support.map((item, index) => (
                                    <Link key={index} to={item.link} className='text-(--white)/60 hover:text-(--white)!
                                    hover:translate-x-2 transition-all duration-200 ease-in-out font-light'>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className='flex flex-col md:flex-row md:items-center justify-between'>
                        <Link to='/about' className='text-(--white) hover:text-(--white)!
                        hover:-translate-y-1 transition-all duration-200 ease-in-out hidden md:block'>Our Story</Link>
                        <Link to='#gallery' className='text-(--white) hover:text-(--white)!
                        hover:-translate-y-1 transition-all duration-200 ease-in-out hidden md:block'>Gallery</Link>
                        <CTAButton label='Order Now' className='bg-(--white) border-(--white)'
                        span='group-hover:text-(--white) text-(--orange)' className3='text-(--white)' className2='bg-(--orange)'/>
                    </div>
                </div>
            </div>
            <hr className='text-(--white)/60'/>
            <div className='flex flex-col md:flex-row justify-between text-(--white) space-y-8'>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                    <p className='text-xs font-light text-(--white)/60 hover:text-white! transition-colors duration-300'>© 2025 Achar House</p>
                    <span className='text-(--white)/60 md:block hidden'>/</span>
                    <div className='flex items-start md:items-center gap-4 flex-col md:flex-row'>
                        <Link to="/policies#all-rights-reserved" className='hover:-translate-y-1 transition-all duration-300 text-xs 2xl:text-sm font-light
                        text-(--white)/60 hover:text-white!'>All rights reserved</Link> <span className='text-(--white)/60 md:block hidden'>/</span>
                        <Link to="/policies#privacy-policy" className='hover:-translate-y-1 transition-all duration-300 text-xs 2xl:text-sm font-light
                        text-(--white)/60 hover:text-white!'>Privacy Policy</Link> <span className='text-(--white)/60 md:block hidden'>/</span>
                        <Link to="/policies#terms-and-conditions" className='hover:-translate-y-1 transition-all duration-300 text-xs  2xl:text-sm font-light
                        text-(--white)/60 hover:text-white!'>Terms & Conditions</Link>
                    </div>
                </div>
                <div>
                    <Link to='https://phurpa-sherpa-portfolio.vercel.app' target='_blank' rel='noopener noreferrer' 
                    title='Visit Me'
                    className='text-xs font-light text-(--white)/60 hover:text-white! transition-colors duration-300  2xl:text-sm'>By (Phurpa Sherpa)</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

const Social = () => {
    return(
        <div className='space-x-8 flex items-center justify-center w-fit'>
            {socialLinks.map((item, index) => (
                <Link key={index} to={item.link} className='text-(--white) transition-colors duration-300 hover:text-(--white)!'>
                    <motion.div whileHover={{scale:1.3, y:-5}} whileTap={{scale:0.9, y:0}} className='text-2xl'>
                        {item.icon}
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}

export const socialLinks = [
    {label:'Facebook', link:'/', icon:<FaFacebook />},
    {label:'Instagram', link:'/', icon:<FaInstagram />},
    {label:'Tiktok', link:'/', icon:<FaTiktok />},
    {label:'WhatsApp', link:'/', icon:<FaWhatsapp />},
]

const Menu = [
    {label:'Home', link:'/'},
    {label:'Products', link:'/products'},
    {label:'About', link:'/about'},
    {label:'Top Collection', link:'#topCollection'},
]

const forDistribution=[
    {label:'Kathmandu Valley', link:`/inquiry/${'kathmandu'}`},
    {label:'Nationwide Delivery', link:`/inquiry/${'national'}`},
    {label:'International Shipping', link:`/inquiry/${'international'}`},
    {label:'Bulk Orders', link:`/inquiry/${'bulk_order'}`},
]

const Support=[
    {label:'Shipping Policy', link:'/shipping-policies'},
    {label:'Returns & Refunds', link:'/return-refunds'},
    {label:'Contact Support', link:'/contact-support'},
    {label:'FAQs', link:'/faqs'},
]
