import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { FaCheck } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

export default function CartButton({product, className, size='size-5'}) {
    const { addToCart } = useCart()
    const [addedFeedback, setAddedFeedback] = useState(false)
  return (
    <button onClick={() => {
        addToCart(product, 1)
        setAddedFeedback(true)
        setTimeout(() => setAddedFeedback(false), 1500)
    }} 
    className={`w-fit h-full ${addedFeedback ? 'bg-(--light_green) hover:bg-(--light_green)' : `${className || 'bg-(--orange) hover:bg-(--dark_orange)'}` }
    cursor-pointer text-white!
    p-2.5 rounded-full transition-colors duration-300 text-sm flex items-center justify-center 
    gap-2 group/btn shadow-md hover:shadow-lg`}>
        {addedFeedback ? 
        <span> <FaCheck className='size-5 pointer-events-none text-green-600'/></span> :
        <FaCartShopping className={`${size} pointer-events-none`}/>
        }
    </button>
  )
}
