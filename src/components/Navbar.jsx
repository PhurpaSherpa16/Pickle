import React, { useState, useEffect, useRef } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import CartDropdown from './CartDropdown'
import { IoMdMail } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  // Auto-close menu if screen resized to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setScrolled(false)
        setVisible(true)
      } else {
        setScrolled(true)
        if (currentScrollY > lastScrollY.current) {
          // Only hide if menu is not open
          if (!isOpen) {
            setVisible(false)
          }
        } else if (currentScrollY < lastScrollY.current) {
          setVisible(true)
        }
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Stagger variants for menu links
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  const isWhiteHeader = scrolled || isOpen;

  return (
    <>
      <div className={`fixed w-screen top-0 z-50 h-20 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${isWhiteHeader ? 'bg-(--white) shadow-md' : 'bg-transparent'}`}>
          <div className='mainDiv flex items-center h-full'>
              <div className='flex items-center justify-between w-full'>
                  <Link to='/' className='flex items-center gap-1.5' onClick={() => setIsOpen(false)}>
                      <img src="/largelogo.png" alt="logo" className='size-8 object-cover object-center'/>
                      <p className='uppercase font-black text-(--orange)'>Pickle</p>
                  </Link>
                  {!isMobile && location.pathname === '/' &&
                    <div className='flex items-center gap-16'>
                        {
                            MenuList.map((item, index)=>(
                                <div key={index} className='relative flex items-center gap-16'>
                                    <Link to={item.path}>
                                        <p className={`uppercase text-sm transition-all
                                        ${isWhiteHeader ? 'text-(--orange) hover:text-(--dark_orange)' : 'text-(--white) hover:text-(--orange)'}`}>{item.name}</p>
                                    </Link>
                                    <div className={`size-1 rounded-full ${index === 2 ? 'hidden' : 'block'}
                                    ${isWhiteHeader ? 'bg-(--orange)' : 'bg-(--white)'}`}/>
                                </div>
                            ))
                        }
                    </div>
                  }
                  <div className='flex items-center gap-8'>
                    {isMobile && location.pathname === '/' && (
                      <span 
                        onClick={() => setIsOpen(!isOpen)}
                        className={`text-sm font-semibold transition-all cursor-pointer select-none uppercase tracking-wider
                        ${isWhiteHeader ? 'text-(--orange) hover:text-(--dark_orange)' : 'text-(--white) hover:text-(--orange)'}`}
                      >
                        {isOpen ? 'Close' : 'Menu'}
                      </span>
                    )}
                    <CartDropdown isWhiteHeader={isWhiteHeader} />
                  </div>
              </div>
          </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
            className="fixed top-0 left-0 w-screen min-h-screen bg-(--black)/80 z-40 flex flex-col justify-between"
          >
            <div className='bg-(--white) pt-28 min-h-[40vh] pb-8'>
              {/* Center: Three Menu List Items */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center justify-center grow gap-8 pb-8"
              >
                {MenuList.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-black text-(--orange) hover:text-(--dark_orange) transition-colors tracking-widest uppercase"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom: Contact Details & Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col items-center gap-6 mt-auto border-t border-(--orange)/10 pt-8"
              >
                <a
                  href="mailto:sales.pickle@gmail.com"
                  className="flex items-center gap-2 text-(--dark_orange) hover:text-(--orange) transition-colors text-base font-semibold tracking-wide"
                >
                  <IoMdMail className="size-5 text-(--orange)" />
                  <span className='text-(--orange)'>sales.pickle@gmail.com</span>
                </a>

                <div className="flex items-center gap-8">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-(--orange) hover:text-(--dark_orange) transition-colors text-2xl"
                    >
                      <motion.div
                        whileHover={{ scale: 1.25, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        {item.icon}
                      </motion.div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const MenuList = [
    {name:"Product",path:"/products"},
    {name:"About",path:"/about"},
    {name:"Contact",path:"/contact"},
]

const socialLinks = [
    {label:'Facebook', link:'/', icon:<FaFacebook />},
    {label:'Instagram', link:'/', icon:<FaInstagram />},
    {label:'Tiktok', link:'/', icon:<FaTiktok />},
    {label:'WhatsApp', link:'/', icon:<FaWhatsapp />},
]


