import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { FaCheckCircle } from 'react-icons/fa'
import { BiCalendar, BiPackage, BiShoppingBag } from 'react-icons/bi'
import { BsTruck } from 'react-icons/bs'


export default function Order() {
  const navigate = useNavigate()
  const { cartItems, totalPrice, clearCart } = useCart()

  // Generate order number
  const orderNumber = `#PKL-${Date.now().toString().slice(-6)}`

  // Estimated delivery (5-7 days from now)
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 6)
  const formattedDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })

  if(cartItems.length === 0){
    return(
        <div className='min-h-screen w-screen pt-28 flex items-center justify-center'>
            <div className='mainDiv mx-auto px-6 pb-20 flex flex-col items-center justify-center space-y-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-(--orange) mb-3 text-center'>
                    No Order Found
                </h1>
                <p className='text-[#6b6b6b] text-center'>
                    You have no order history.
                </p>
                <button onClick={() => {
                    clearCart()
                    navigate('/products')
                }}
                className='w-fit flex items-center cursor-pointer justify-center gap-2 px-6 py-4 rounded-full bg-(--orange) text-white! hover:bg-(--orange)/90 transition-colors'>
                <BiShoppingBag size={18} />
                Add Some Pickle
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className='min-h-screen w-screen pt-28'>
      <div className='mainDiv mx-auto px-6 pb-20'>

        {/* Success Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6'>
            <FaCheckCircle size={40} className='text-green-600' />
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-(--orange) mb-3'>
            Order Confirmed
          </h1>
          <p className='text-[#6b6b6b]'>
            Thank you for choosing real flavor.
          </p>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-8 md:gap-16'>
            {/* Order Summary */}
            <OrderSummary cartItems={cartItems} />
            {/* Order Card */}
            <OrderDetails orderNumber={orderNumber} totalPrice={totalPrice} formattedDate={formattedDate} />

        </div>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center pt-8'>
          <button onClick={() => {
              clearCart()
              navigate('/products')
            }}
            className='w-fit flex items-center cursor-pointer justify-center gap-2 px-6 py-4 rounded-full bg-(--orange) text-white! hover:bg-(--orange)/90 transition-colors'>
            <BiShoppingBag size={18} />
            Back to Shopping
          </button>
        </div>

        {/* Support */}
        <p className='text-center text-sm text-[#9c8b7a] mt-8'>
          Questions? Reach us at{' '}
          <a href='mailto:hello@pickle.com' className='underline hover:text-[#2a1a0f]'>
            sales.pickle@pickle.com
          </a>
        </p>
      </div>
    </div>
  )
}

const OrderDetails = ({orderNumber, totalPrice, formattedDate}) =>{
    return(
        <div className='bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8e0d5] mb-6 
        w-full md:w-1/2'>
          {/* Order Meta */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#f0ebe3]'>
            <div>
              <p className='text-xs uppercase tracking-wider text-[#9c8b7a] mb-1'>
                Order Number
              </p>
              <p className='text-lg font-medium text-[#2a1a0f]'>{orderNumber}</p>
            </div>
            <div className='sm:text-right'>
              <p className='text-xs uppercase tracking-wider text-[#9c8b7a] mb-1'>
                Total Amount
              </p>
              <p className='text-2xl font-bold text-(--orange)'>
                Rs. {totalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className='py-8'>
            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-(--orange) flex items-center justify-center'>
                  <FaCheckCircle size={18} className='text-white' />
                </div>
                <div className='w-0.5 h-12 bg-(--orange)' />
              </div>
              <div>
                <p className='font-medium text-[#2a1a0f]'>Order Placed</p>
                <p className='text-sm text-[#9c8b7a]'>Confirmed and processing</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-[#e8e0d5] flex items-center justify-center'>
                  <BiPackage size={18} className='text-[#9c8b7a]' />
                </div>
                <div className='w-0.5 h-12 bg-[#e8e0d5] mt-1' />
              </div>
              <div>
                <p className='font-medium text-[#2a1a0f]'>Preparing</p>
                <p className='text-sm text-[#9c8b7a]'>Hand-packed in small batches</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-[#e8e0d5] flex items-center justify-center'>
                  <BsTruck size={18} className='text-[#9c8b7a]' />
                </div>
              </div>
              <div>
                <p className='font-medium text-[#2a1a0f]'>Delivery</p>
                <div className='flex items-center gap-2 text-sm text-[#9c8b7a]'>
                  <BiCalendar size={14} />
                  <span>Estimated by {formattedDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Note */}
          <div className='bg-[#faf7f2] rounded-xl p-4 text-center'>
            <p className='text-sm text-[#6b6b6b]'>
              We ship from <span className="font-semibold text-sm">Kathmandu within 24 hours</span> of preparation.
            </p>
          </div>
        </div>
    )
}

const OrderSummary = ({cartItems}) =>{
    return(
        <>
            {cartItems.length > 0 && (
                <div className='bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8e0d5] 
                mb-6 w-full md:w-1/2'>
                    <h2 className='text-lg font-medium text-[#2a1a0f] mb-6'>
                    What's Coming
                    </h2>
                    <div className='space-y-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center gap-4'>
                        <div className='w-16 h-16 rounded-lg bg-[#faf7f2] flex items-center justify-center overflow-hidden'>
                            <img
                            src={item.images?.[0] || '/images/placeholder.jpg'}
                            alt={item.name}
                            className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex-1'>
                            <p className='font-medium text-[#2a1a0f]'>{item.name}</p>
                            <p className='text-sm text-[#9c8b7a]'>
                            {item.weight} × {item.quantity}
                            </p>
                        </div>
                        <p className='font-medium text-[#2a1a0f]'>
                            Rs. {(item.price * item.quantity).toLocaleString()}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    )
}