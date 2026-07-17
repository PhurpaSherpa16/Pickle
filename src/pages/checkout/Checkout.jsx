import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FaMinus, FaPlus, FaTrash, FaShoppingBag, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { HiTruck } from "react-icons/hi";


export default function Checkout() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart()

  return (
    <div className='min-h-screen w-screen bg-(--offWhite)/30 pb-24'>
      <div className='mainDiv pt-28 px-4'>

        {/* Breadcrumbs */}
        <div className='flex items-center gap-2 font-light 2xl:font-semibold text-gray-400 mb-10 uppercase tracking-wider'>
          <Link to="/" className='hover:text-(--orange) transition-colors text-xs!'>Home</Link>
          <span className='text-xs!'>/</span>
          <span className='text-gray-600 text-xs!'>Checkout</span>
        </div>

        <h1 className='text-3xl md:text-4xl font-black text-(--dark_orange) uppercase tracking-wide mb-10'>Checkout</h1>

        {cartItems.length === 0 ? (
          /* ── Empty Cart ── */
          <div className='bg-white rounded-3xl border border-gray-100 shadow-sm p-12 flex flex-col items-center gap-6'>
            <div className='size-20 rounded-full bg-(--orange)/5 flex items-center justify-center'>
              <FaShoppingBag className='size-9 text-(--orange)/30' />
            </div>
            <p className='text-gray-400 text-lg font-medium'>Your cart is empty</p>
            <Link
              to="/products"
              className='bg-(--orange) hover:bg-(--dark_orange) text-white! font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>

            {/* ── Left: Cart Items ── */}
            <div className='lg:col-span-8 space-y-4'>
              {/* Table header */}
              <div className='hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-gray-400 uppercase tracking-widest border-b border-gray-100'>
                <span className='col-span-5 text-xs'>Product</span>
                <span className='col-span-2 text-center text-xs'>Price</span>
                <span className='col-span-3 text-center text-xs'>Quantity</span>
                <span className='col-span-2 text-right text-xs'>Total</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className='bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:shadow-md transition-shadow'>
                  
                  {/* Product info */}
                  <div className='md:col-span-5 flex items-center gap-4'>
                    <Link to={`/product/${item.id}`}
                      className='shrink-0 size-18 rounded-xl overflow-hidden bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center p-2'>
                      <img src={item.images?.[0] || '/radish.png'} alt={item.name} className='size-full object-contain' />
                    </Link>
                    <div className='min-w-0'>
                      <Link to={`/product/${item.id}`} className='font-bold text-(--dark_orange) hover:text-(--orange) transition-colors line-clamp-1 text-sm'>
                        {item.name}
                      </Link>
                      <p className='text-xs text-gray-400 mt-0.5'>{item.size}{item.unit} · {item.category}</p>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 inline-block ${
                        item.type === 'veg' 
                          ? 'bg-(--green)/10 text-(--green)' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>{item.type}</span>
                    </div>
                  </div>

                  {/* Unit price */}
                  <div className='md:col-span-2 text-center'>
                    <span className='text-sm text-gray-500 md:text-gray-600 font-medium'>
                      <span className='md:hidden text-xs text-gray-400 mr-1'>Price:</span>
                      Rs. {item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className='md:col-span-3 flex items-center justify-center gap-3'>
                    <div className='flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white'>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='text-gray-400 hover:text-(--orange) transition-colors cursor-pointer p-0.5'
                      >
                        <FaMinus className='size-2.5' />
                      </button>
                      <span className='text-sm font-bold text-gray-700 w-6 text-center'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='text-gray-400 hover:text-(--orange) transition-colors cursor-pointer p-0.5'
                      >
                        <FaPlus className='size-2.5' />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='text-gray-300 hover:text-red-500 transition-colors cursor-pointer p-2'
                    >
                      <FaTrash className='size-3.5' />
                    </button>
                  </div>

                  {/* Line total */}
                  <div className='md:col-span-2 text-right'>
                    <span className='text-sm font-bold text-(--orange)'>
                      <span className='md:hidden text-xs text-gray-400 mr-1'>Total:</span>
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Right: Order Summary ── */}
            <div className='lg:col-span-4'>
              <div className='bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 sticky top-28 space-y-6'>
                <h2 className='text-lg font-black text-(--dark_orange) uppercase tracking-wider'>Order Summary</h2>

                <div className='space-y-3 border-b border-gray-100 pb-5'>
                  <div className='flex justify-between'>
                    <span className='text-gray-400 text-sm'>Items ({totalItems})</span>
                    <span className='text-gray-600 font-medium text-sm'>Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-400 text-sm'>Shipping</span>
                    <span className='text-(--green) font-semibold text-xs'>FREE</span>
                  </div>
                </div>

                <div className='flex justify-between items-baseline'>
                  <span className='text-sm text-gray-500 font-semibold'>Total Amount</span>
                  <span className='text-2xl font-bold text-(--orange)'>Rs. {totalPrice.toLocaleString()}</span>
                </div>

                <div className='flex flex-col gap-3 pt-2'>
                  <Link to="/order" className='w-full bg-(--orange) hover:bg-(--dark_orange) text-white! font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2'>
                    <span>Place Order Now</span>
                    <HiTruck className='size-5' />
                  </Link>
                  <Link
                    to="/products"
                    className='w-full text-center py-3 flex items-center justify-center gap-2 rounded-xl border border-(--orange)/20 text-(--orange)! text-sm font-semibold hover:bg-(--orange)/5 transition-colors'
                  >
                    <FaArrowLeft className='size-4' />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
