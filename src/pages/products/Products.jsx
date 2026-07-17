import React, { useState } from 'react'
import { productsData } from '../../data/products'
import { FaStar, FaShoppingCart, FaEye, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext';
import CartButton from '../../components/CartButton';

export default function Products() {
  const location = useLocation();
  const initialCategory = location.state?.category || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const categories = ["All", "Meat", "Vegetable", "Fruit", "Chili", "Snack"];

  const filteredProducts = selectedCategory === "All" 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className='min-h-screen w-screen bg-(--offWhite)/50'>
        <div className='mainDiv pt-32 px-4 pb-24'>
            {/* Header Section */}
            <div className='space-y-8 mb-12 flex flex-col items-center justify-center'>
                {/* Category Filters */}
                <div className='flex flex-wrap items-start justify-start gap-3 md:gap-4 pb-2 border-b border-gray-100 w-full'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                                selectedCategory === category
                                ? 'bg-(--orange) text-white shadow-md'
                                : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50 hover:text-gray-700 shadow-sm'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid display with AnimatePresence */}
            <motion.div layout 
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[400px]'>
                <AnimatePresence mode='popLayout'>
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductCard 
                                product={product}
                                pid = {product.id}
                                src={product.images ? product.images[0] : '/radish.png'} 
                                name={product.name} 
                                category={product.category} 
                                price={product.price} 
                                weight={`${product.size}${product.unit}`} 
                                rating={product.rating}
                                type={product.type}
                                flavor={product.flavor}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    </div>
  )
}

export const ProductCard = ({src, name, category, price, weight, rating, type, flavor, pid, product}) => {
    
    return(
        <div className='group relative bg-(--white) border border-(--orange)/10 rounded-2xl flex p-4 space-y-2
        flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer h-full'>
            
            {/* Badges on Top of Image Container */}
            <div className='absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none'>
                <span className={`text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border backdrop-blur-md ${
                    type === 'veg' 
                    ? 'bg-(--green)/10 border-(--green)/20 text-(--green)' 
                    : 'bg-red-500/10 border-red-500/20 text-red-500'
                }`}>
                    {type}
                </span>
                
                <div className='flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 px-2 py-0.5 rounded-full backdrop-blur-md'>
                    <FaStar className='size-2.5 text-amber-500 fill-amber-500' />
                    <span className='text-xs'>{rating}</span>
                </div>
            </div>

            {/* Image Container */}
            <div className={`h-48 md:h-56 w-full flex items-center justify-center p-6 
            bg-linear-to-br
            ${type === 'veg'
                ? 'from-(--light_green)/10 to-(--green)/20'
                : 'from-(--light_orange)/10 to-(--orange)/20'
                } rounded-xl relative overflow-hidden`}>
                <img
                    src={src}
                    alt={name}
                    className='h-full w-auto object-contain object-center z-10 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-md'
                />
                {/* Background decorative elements */}
                <div className='absolute size-24 bg-amber-200/10 rounded-full -bottom-4 -right-4 blur-xl transition-all group-hover:bg-amber-300/20' />
                <div className='absolute size-32 bg-orange-200/10 rounded-full -top-8 -left-8 blur-xl' />
            </div>

            {/* Content Details */}
            <div className='grow flex flex-col justify-between space-y-3'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <span className='text-xs text-(--orange) tracking-wider uppercase'>{category}</span>
                        {flavor && (
                            <span className='text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded'>{flavor}</span>
                        )}
                    </div>
                    
                    <h2 className='text-base md:text-lg font-bold text-(--dark_orange) tracking-wide line-clamp-1 group-hover:text-(--orange) transition-colors'>
                        {name}
                    </h2>
                </div>

                <div className='space-y-3'>
                    <div className='flex items-baseline justify-between'>
                        <p className='text-xl font-black text-(--orange)'>
                            Rs. {price}
                        </p>
                        <p className='text-xs text-gray-400'>
                            Net Wt: {weight}
                        </p>
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <Link to={`/product/${pid}`} className='w-full bg-(--orange) cursor-pointer hover:bg-(--dark_orange) text-white! 
                        py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg'>
                            <span>View Product</span>
                            <FaArrowRight className='-rotate-45'/>
                        </Link>
                        <CartButton product={product}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
