import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { productsData } from '../../data/products'
import { ProductCard } from './Products'
import { FaStar, FaFire, FaArrowRight, FaMinus, FaPlus, FaCheckCircle, FaShoppingCart } from 'react-icons/fa'
import { IoShieldCheckmark } from "react-icons/io5";
import { useCart } from '../../context/CartContext'

const dummyComments = [
  { name: "Aarav Sharma", rating: 5, date: "July 10, 2026", text: "Absolutely delicious! The spice level is just right, and the timur kick is amazing." },
  { name: "Sofia Shrestha", rating: 4, date: "July 12, 2026", text: "Tastes just like the homemade pickle my grandmom used to make. Highly recommended!" },
  { name: "Nischal Adhikari", rating: 5, date: "June 28, 2026", text: "The meat is cooked perfectly, and the blend of roasted spices is very rich and aromatic." },
  { name: "Prerna Lama", rating: 5, date: "July 05, 2026", text: "A staple in my dining room now. Goes well with Dal Bhat and even simple crackers." },
  { name: "Rohit Gurung", rating: 4, date: "July 02, 2026", text: "Very fresh and authentic flavor. The bottle was packed carefully. Will order again!" },
  { name: "Anjali Tamang", rating: 5, date: "June 30, 2026", text: "Extra spicy and tangy! Just the way I like it. Worth every rupee." },
  { name: "Siddharth Joshi", rating: 3, date: "June 25, 2026", text: "Good flavor, but a bit too hot for my taste. If you like heat, this is for you." },
  { name: "Maya Rai", rating: 5, date: "July 14, 2026", text: "Amazing customer service and quick delivery. The chicken achar is mouthwatering!" },
  { name: "Binod Karki", rating: 4, date: "July 08, 2026", text: "Traditional methods really show in the taste. It's not too oily like store-bought brands." },
  { name: "Kabita Thapa", rating: 5, date: "July 15, 2026", text: "Timur flavor is exceptional! Love the citrusy notes. A must-try." }
];

export default function Product() {
  const { id } = useParams()
  const product = productsData.find(p => p.id === Number(id))

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [randomComments, setRandomComments] = useState([])
  const [addedFeedback, setAddedFeedback] = useState(false)
  const { addToCart } = useCart()

  // Pick 4 random comments on mount / id change
  useEffect(() => {
    const shuffled = [...dummyComments].sort(() => 0.5 - Math.random())
    setRandomComments(shuffled.slice(0, 4))
    setActiveImageIndex(0)
    setQuantity(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  // ── Not found ──
  if (!product) {
    return (
      <div className='min-h-screen w-screen flex flex-col items-center justify-center gap-6 pt-28 bg-(--offWhite)'>
        <h2 className='text-2xl font-black text-(--dark_orange)'>Product not found</h2>
        <Link to="/products" className='bg-(--orange) text-white font-bold py-3 px-6 rounded-xl hover:bg-(--dark_orange) transition-colors'>
          ← Back to Products
        </Link>
      </div>
    )
  }

  const images = product.images || []

  // ── Related products (same category, exclude self) ──
  const relatedProducts = useMemo(() => {
    const sameCategory = productsData.filter(p => p.category === product.category && p.id !== product.id)
    if (sameCategory.length >= 4) return sameCategory.slice(0, 4)
    // fill with others if needed
    const extras = productsData.filter(p => p.id !== product.id && !sameCategory.some(r => r.id === p.id))
    return [...sameCategory, ...extras].slice(0, 4)
  }, [product])

  // ── Heat level visual ──
  const renderHeat = (level) => (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, i) => (
        <FaFire key={i} className={`size-3.5 ${i < level ? 'text-(--orange)' : 'text-gray-200'}`} />
      ))}
      <span className='text-xs text-gray-400 font-semibold ml-1'>{level}/5</span>
    </div>
  )

  return (
    <div className='min-h-screen w-screen bg-(--offWhite)/30 pt-28 pb-24'>
      <div className='mainDiv px-4'>

        {/* ── Breadcrumbs ── */}
        <div className='flex items-center gap-2 font-light 2xl:font-semibold text-gray-400 mb-10 uppercase tracking-wider'>
          <Link to="/" className='hover:text-(--orange) transition-colors text-xs!'>Home</Link>
          <span className='text-xs!'>/</span>
          <Link to="/products" className='hover:text-(--orange) transition-colors text-xs!'>Products</Link>
          <span className='text-xs!'>/</span>
          <span className='text-gray-600 text-xs!'>{product.name}</span>
        </div>

        {/* ══════════════════════════════════════════════
            TOP SECTION — Image + Details
        ══════════════════════════════════════════════ */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20'>

          {/* ── Left: Image gallery ── */}
          <div className='lg:col-span-5 flex flex-col gap-5'>
            {/* Main active image */}
            <div className={`bg-linear-to-br 
            ${product.type === 'veg'    
                ? 'from-(--light_green)/10 to-(--green)/20'
                : 'from-(--light_orange)/10 to-(--orange)/20'
            }
            rounded-3xl p-8 flex items-center justify-center relative overflow-hidden border border-(--orange)/10 min-h-[320px] md:min-h-[420px] shadow-sm`}>
              <img
                src={images[activeImageIndex] || images[0]}
                alt={product.name}
                className='h-64 md:h-80 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500'
              />
              {/* Type badge */}
              <span className={`absolute top-5 left-5 text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest border backdrop-blur-md ${
                product.type === 'veg'
                  ? 'bg-(--green)/10 border-(--green)/20 text-(--green)'
                  : 'bg-red-500/10 border-red-500/20 text-red-500'
              }`}>
                {product.type}
              </span>
            </div>

            {/* Thumbnails — only if more than 2 images */}
            {images.length > 2 && (
              <div className='flex gap-3 justify-center'>
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative size-20 border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                      idx === activeImageIndex
                        ? 'border-(--orange) scale-105 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className='size-full object-cover' />
                    {/* black/40 overlay on inactive thumbnails */}
                    {idx !== activeImageIndex && (
                      <div className='absolute inset-0 bg-black/40 hover:bg-black/25 transition-colors duration-200' />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Product info ── */}
          <div className='lg:col-span-7 flex flex-col justify-between gap-6'>
            <div className='space-y-5'>
              {/* Category + rating */}
              <div className='flex items-center gap-3 flex-wrap'>
                <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full
                    ${product.type === 'veg'
                    ? 'bg-(--green)/10 border-(--green)/20 text-(--green)'
                    : 'bg-red-500/10 border-red-500/20 text-red-500'
                }`}>
                  {product.category}
                </span>
                <div className='flex items-center gap-1.5 bg-amber-500/5 border border-amber-500/10 text-amber-600 px-3 py-1 rounded-full'>
                  <FaStar className='size-3 text-amber-500' />
                  <span className='text-xs font-bold'>{product.rating}</span>
                  <span className='text-[10px] text-gray-400'>({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Name */}
              <h1 className='text-3xl md:text-5xl font-black text-(--dark_orange) uppercase tracking-wide leading-tight'>
                {product.name}
              </h1>

              {/* Heat + Flavor */}
              <div className='flex flex-wrap items-center gap-5 py-3 border-y border-gray-100'>
                {renderHeat(product.heatLevel)}
                <div className='h-4 w-px bg-gray-200 hidden sm:block' />
                <div className='flex items-center gap-2'>
                  <span className='text-xs text-gray-400 font-semibold uppercase'>Flavor</span>
                  <span className='text-xs font-bold text-(--orange) bg-(--orange)/5 px-2.5 py-1 rounded-md uppercase tracking-wider'>{product.flavor}</span>
                </div>
              </div>

              {/* Description */}
              <p className='text-gray-500 text-base leading-relaxed md:w-5/6'>
                {product.description}
              </p>

              {/* Ingredients */}
              <div className='space-y-2'>
                <h3 className='text-xs font-bold text-(--dark_orange) uppercase tracking-widest'>Ingredients</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.ingredients.map((ing, idx) => (
                    <span key={idx} className='bg-white border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-xl font-medium shadow-sm hover:border-(--orange)/20 transition-colors'>
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price + Cart */}
            <div className='space-y-5 pt-5 border-t border-gray-100'>
              <div className='flex items-baseline justify-between'>
                <div>
                  <p className='text-xs text-gray-400 uppercase'>Price</p>
                  <p className='text-3xl font-bold text-(--orange)'>Rs. {product.price}</p>
                </div>
                <div className='text-right'>
                  <p className='text-xs text-gray-400 uppercase'>Net Weight</p>
                  <p className='text-base font-bold text-(--dark_orange) bg-gray-100 px-3 py-1.5 rounded-lg'>{product.size}{product.unit}</p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                {/* Quantity */}
                <div className='flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white sm:w-36'>
                  <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className='text-gray-500 hover:text-(--orange) transition-colors cursor-pointer'>
                    <FaMinus className='size-3' />
                  </button>
                  <span className='font-bold text-gray-700 text-sm'>{quantity}</span>
                  <button onClick={() => setQuantity(prev => prev + 1)} className='text-gray-500 hover:text-(--orange) transition-colors cursor-pointer'>
                    <FaPlus className='size-3' />
                  </button>
                </div>

                <button 
                  onClick={() => {
                    addToCart(product, quantity)
                    setAddedFeedback(true)
                    setTimeout(() => setAddedFeedback(false), 1500)
                  }}
                  className='grow bg-(--orange) hover:bg-(--dark_orange) text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer'
                >
                  <FaShoppingCart className='size-4' />
                  <span>{addedFeedback ? 'Added ✓' : `Add to Cart — Rs. ${product.price * quantity}`}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            REVIEWS SECTION
        ══════════════════════════════════════════════ */}
        <div className='bg-white border border-(--orange)/10 rounded-3xl p-8 md:p-12 mb-20 shadow-sm'>
          <h2 className='text-2xl md:text-3xl font-black text-(--dark_orange) uppercase tracking-wide mb-8 flex items-start gap-3'>
            Customer Reviews
            <span className='text-xs bg-(--orange)/10 text-(--orange) px-3 py-1 rounded-full font-normal'>{product.reviews} reviews</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {randomComments.map((comment, idx) => (
              <div key={idx} className='bg-(--offWhite)/30 p-6 rounded-2xl border border-gray-100 space-y-3 hover:shadow-md transition-shadow'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h4 className='font-bold text-(--dark_orange)'>{comment.name}</h4>
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center gap-2 text-xs text-(--green) font-bold'>
                            <IoShieldCheckmark className='size-3' />
                            <span className='text-xs'>Verified Purchase,</span>
                        </div>
                        <p className='text-xs text-gray-400'>{comment.date}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`size-3 ${i < comment.rating ? 'text-amber-500' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className='text-gray-500 text-sm italic leading-relaxed font-serif'>"{comment.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            RELATED PRODUCTS
        ══════════════════════════════════════════════ */}
        <div>
          <div className='flex justify-between items-center border-b border-(--orange)/10 pb-4 mb-8'>
            <h2 className='text-2xl md:text-3xl font-black text-(--dark_orange) uppercase tracking-wide'>
              Related Products
            </h2>
            <Link
              to="/products"
              state={{ category: product.category }}
              className='text-(--orange) hover:text-(--dark_orange) font-bold flex items-center gap-2 hover:translate-x-1 transition-transform'
            >
              <span>View All {product.category}</span>
              <FaArrowRight className='size-4' />
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {relatedProducts.map((rp) => (
              <ProductCard
                key={rp.id}
                pid={rp.id}
                src={rp.images ? rp.images[0] : '/radish.png'}
                name={rp.name}
                category={rp.category}
                price={rp.price}
                weight={`${rp.size}${rp.unit}`}
                rating={rp.rating}
                type={rp.type}
                flavor={rp.flavor}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
