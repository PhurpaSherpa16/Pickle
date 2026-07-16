import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaMinus, FaPlus, FaTrash, FaShoppingBag } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

export default function CartDropdown({ isWhiteHeader }) {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Cart Icon Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={`rounded-full p-2 cursor-pointer relative
          hover:bg-(--orange)/80 hover:text-(--white) transition-all duration-300
          ${isWhiteHeader ? 'bg-(--orange) text-(--white)' : 'bg-(--white) text-(--orange)'}`}
      >
        <FaShoppingBag className='size-5' />
        {totalItems > 0 && (
          <span className='absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold size-5 rounded-full flex items-center justify-center shadow-md'>
            {totalItems}
          </span>
        )}
      </div>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onMouseLeave={() => setIsOpen(false)}
            className='absolute top-full right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]'
          >
            {/* Header */}
            <div className='px-5 py-4 border-b border-gray-100 flex items-center justify-between'>
              <h3 className='font-bold text-(--dark_orange) text-sm uppercase tracking-wider'>Your Cart</h3>
              {totalItems > 0 && (
                <span className='text-xs bg-(--orange)/10 text-(--orange) px-2.5 py-0.5 rounded-full font-semibold'>
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>

            {/* Content */}
            {cartItems.length === 0 ? (
              /* Empty state */
              <div className='px-5 py-10 flex flex-col items-center gap-4'>
                <div className='size-16 rounded-full bg-(--orange)/5 flex items-center justify-center'>
                  <FaShoppingBag className='size-7 text-(--orange)/40' />
                </div>
                <p className='text-gray-400 text-sm font-medium'>No products added yet</p>
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className='bg-(--orange) hover:bg-(--dark_orange) text-white! text-sm font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg'>
                  Browse Products
                </Link>
              </div>
            ) : (
              <>
                {/* Cart items list */}
                <div className='max-h-72 overflow-y-auto divide-y divide-gray-50'>
                  {cartItems.map((item) => (
                    <div key={item.id} className='px-5 py-4 flex gap-3 hover:bg-gray-50/50 transition-colors'>
                      {/* Product image */}
                      <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}
                        className='shrink-0 size-16 rounded-xl overflow-hidden bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center p-1.5'>
                        <img
                          src={item.images?.[0] || '/radish.png'}
                          alt={item.name}
                          className='size-full object-contain'
                        />
                      </Link>

                      {/* Details */}
                      <div className='grow min-w-0 flex flex-col justify-between'>
                        <div>
                          <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}
                            className='text-sm font-bold text-(--dark_orange) hover:text-(--orange) transition-colors line-clamp-1'>
                            {item.name}
                          </Link>
                          <p className='text-xs text-gray-400'>{item.size}{item.unit} · {item.category}</p>
                        </div>
                        <div className='flex items-center justify-between mt-1'>
                          <p className='text-sm font-bold text-(--orange)'>Rs. {item.price * item.quantity}</p>
                          <div className='flex items-center gap-2'>
                            {/* Quantity controls */}
                            <div className='flex items-center gap-1.5 border border-gray-200 rounded-lg px-1.5 py-0.5'>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className='text-gray-400 hover:text-(--orange) transition-colors cursor-pointer p-0.5'
                              >
                                <FaMinus className='size-2' />
                              </button>
                              <span className='text-xs font-bold text-gray-700 w-4 text-center'>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className='text-gray-400 hover:text-(--orange) transition-colors cursor-pointer p-0.5'
                              >
                                <FaPlus className='size-2' />
                              </button>
                            </div>
                            {/* Remove */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className='text-gray-300 hover:text-red-500 transition-colors cursor-pointer p-1'
                            >
                              <FaTrash className='size-3' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer with total */}
                <div className='px-5 py-4 border-t border-gray-100 bg-gray-50/30 space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500 font-medium'>Total</span>
                    <span className='text-lg font-black text-(--orange)'>Rs. {totalPrice}</span>
                  </div>
                  <div className='flex gap-3'>
                    <Link
                      to="/products"
                      onClick={() => setIsOpen(false)}
                      className='grow text-center py-2.5 rounded-xl border border-(--orange)/20 text-(--white)! text-sm
                      bg-(--orange)
                      font-semibold hover:bg-(--orange)/90 transition-colors'
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      to="/checkout"
                      onClick={() => setIsOpen(false)}
                      className='grow text-center py-2.5 rounded-xl border border-(--orange)/20 text-(--orange)!
                      text-sm font-semibold 
                      hover:bg-(--orange)/5 transition-colors'
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
