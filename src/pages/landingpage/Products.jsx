import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { motion, AnimatePresence } from 'motion/react';
import CTAButton from '../../components/CTAButton';
import { productsData } from '../../data/products';
import { Link } from 'react-router-dom';

// Dynamic theme mapper based on product categories and names
const getProductTheme = (product) => {
    if (product.category === 'Meat') {
        return product.name.toLowerCase().includes('pork') ? 'red' : 'orange';
    }
    if (product.category === 'Chili' || product.name.toLowerCase().includes('timur')) {
        return 'red';
    }
    if (product.category === 'Vegetable' || product.category === 'Fruit') {
        return 'green';
    }
    return 'orange';
}

// Extract and prepare the top 5 rating products
const productList = [...productsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .map(product => ({
        ...product,
        theme: getProductTheme(product)
    }));

export default function Products() {
    const [activeIndex, setActiveIndex] = useState(0) // Start at index 0

    const len = productList.length
    const prevIndex = (activeIndex - 1 + len) % len
    const nextIndex = (activeIndex + 1) % len

    const activeProduct = productList[activeIndex]

    // Color mappings according to theme
    const themeBg = activeProduct.theme === 'green' ? 'bg-(--light_green)' : activeProduct.theme === 'orange' ? 'bg-(--light_orange)' : 'bg-[#FFD6D6]'
    const themeText = activeProduct.theme === 'green' ? 'text-(--green)' : activeProduct.theme === 'orange' ? 'text-(--orange)' : 'text-[#C51F1F]'
    const themeBgBtn = activeProduct.theme === 'green' ? 'bg-(--green) border-(--green)' : activeProduct.theme === 'orange' ? 'bg-(--orange) border-(--orange)' : 'bg-[#C51F1F] border-[#C51F1F]'
    const themeTextHoverBtn = activeProduct.theme === 'green' ? 'group-hover:text-(--green)' : activeProduct.theme === 'orange' ? 'group-hover:text-(--orange)' : 'group-hover:text-[#C51F1F]'
    const themeTextArrowBtn = activeProduct.theme === 'green' ? 'text-(--green)' : activeProduct.theme === 'orange' ? 'text-(--orange)' : 'text-[#C51F1F]'
    const themeBgDot = activeProduct.theme === 'green' ? 'bg-(--green)' : activeProduct.theme === 'orange' ? 'bg-(--orange)' : 'bg-[#C51F1F]'
    const themeBgDesc = activeProduct.theme === 'green' ? 'bg-(--green)/10' : activeProduct.theme === 'orange' ? 'bg-(--orange)/10' : 'bg-[#C51F1F]/10'

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + len) % len)
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % len)
    }

    return (
        <div className={`min-h-screen w-screen relative z-10 transition-colors duration-500 ${themeBg}`}>
            <div className='pt-16 md:py-32 space-y-8 md:space-y-12 relative z-40'>
                <div className='mainDiv space-y-4 flex flex-col items-center justify-center'>
                    <h1 className={`font-medium transition-colors duration-500 
                        text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]! 
                        ${themeText} text-center`}>
                        Our Top Collection
                    </h1>
                    <p className={`text-center transition-colors duration-500 ${themeText} w-full md:w-3xl font-extralight
                    text-[clamp(0.8rem,1vw+0.8rem,1.8rem)] 2xl:text-[clamp(1.2rem,1vw+1rem,2rem)]`}>Hand-roasted, slow-cured, and packed without preservatives or added color.</p>
                </div>

                {/* carousal */}
                <div className='space-y-4'>
                    <div className='mainDiv flex items-center justify-between relative w-full py-6'>
                        <AnimatePresence initial={false} mode="popLayout">
                            {[prevIndex, activeIndex, nextIndex].map((idx, positionIdx) => {
                                const product = productList[idx]
                                const active = idx === activeIndex
                                
                                return (
                                    <motion.div
                                        key={product.id} 
                                        layout
                                        initial={{ 
                                            opacity: 0,
                                            scale: active ? 1 : 0.8,
                                            x: positionIdx === 0 ? -150 : positionIdx === 2 ? 150 : 0
                                        }}
                                        animate={{ 
                                            opacity: 1,
                                            scale: 1,
                                            x: 0
                                        }}
                                        exit={{ 
                                            opacity: 0,
                                            scale: 0.8,
                                            x: positionIdx === 0 ? -150 : positionIdx === 2 ? 150 : 0
                                        }}
                                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                                        className={`${active ? 'z-30 cursor-default' : 'z-10 cursor-pointer'} flex justify-center`}
                                        onClick={() => {
                                            if (!active) {
                                                if (positionIdx === 0) handlePrev()
                                                if (positionIdx === 2) handleNext()
                                            }
                                        }}
                                    >
                                        <ProductCard 
                                            src={product.images ? product.images[0] : '/radish.png'} 
                                            active={active}
                                        />
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                    {/* button */}
                    <div className='flex items-center justify-center gap-32 md:gap-120'>
                        <button 
                            onClick={handlePrev}
                            className={`p-1 flex items-center justify-center rounded-full transition-colors duration-500 ${themeBgDot} text-(--offWhite) cursor-pointer`}>
                            <IoMdArrowDropleft className='size-8'/>
                        </button>
                        <button 
                            onClick={handleNext}
                            className={`p-1 flex items-center justify-center rounded-full transition-colors duration-500 ${themeBgDot} text-(--offWhite) cursor-pointer`}
                        >
                            <IoMdArrowDropright className='size-8'/>
                        </button>
                    </div>
                    {/* bottom description */}
                    <motion.div 
                        key={activeIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`flex justify-center items-end w-full gap-16 2xl:gap-32 mt-16`}>
                        <div className={`flex flex-col md:flex-row justify-center items-end p-6 py-8 md:p-12 md:px-16 space-y-4 md:rounded-2xl ${themeBgDesc}`}>
                            <div className='space-y-8 w-full md:w-xl'>
                                <div className='space-y-2'>
                                    <h2 className={`transition-colors duration-500 ${themeText} text-2xl lg:text-[clamp(1rem,2vw,2rem)] text-left font-bold
                                    uppercase tracking-wide`}>{activeProduct.name}</h2>
                                    <p className={`transition-colors duration-500 ${themeText} md:w-lg text-xl lg:text-[clamp(0.875rem,1vw+0.5rem,1rem)] text-left font-light`}>{activeProduct.description}</p>
                                </div>
                                <p className={`transition-colors duration-500 ${themeText} text-2xl lg:text-[clamp(1rem,2vw,2rem)] font-bold text-left`}>
                                    Rs. {activeProduct.price} / {activeProduct.size}{activeProduct.unit}
                                </p>
                            </div>
                            <div className='space-y-4 w-full md:w-fit flex items-start md:items-end'>
                                <CTAButton 
                                    link={`/product/${activeProduct.id}`}
                                    label="View This Product" 
                                    className={`${themeBgBtn}`}
                                    span={`${themeTextHoverBtn}`} 
                                    className3={`${themeTextArrowBtn}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
            <div className='mainDiv flex items-center justify-center text-(--orange) py-16 md:pt-0 md:pb-16'>
                <Link to='/products' className='hover:scale-102 transition-all duration-300 hover:underline'>View All Products</Link>
            </div>
        </div>
    )
}

const ProductCard = ({src, active}) => {
    return (
        <div className='h-60 md:h-120 w-fit relative flex items-center'>
            <img src={src} alt="pickle" className={`${active ? 'scale-200 md:scale-100 md:h-full':'md:h-40 blur-[3px]'} md:w-fit mx-auto object-cover rounded-2xl relative z-20 transition-all duration-300`}/>
            {active && 
            <div className='hidden md:block'>
                <div className='bg-black z-10 h-16 w-60 2xl:w-70 rounded-full absolute bottom-16 -left-10  md:bottom-0 md:left-1/2 md:-translate-x-1/3 blur-2xl'/>
                <div className='bg-black/80 z-30 h-16 w-60 2xl:w-70 rounded-full absolute bottom-0 left-1/2 -translate-x-1/3 blur-3xl'/>
            </div>
            }
        </div>
    )
}
