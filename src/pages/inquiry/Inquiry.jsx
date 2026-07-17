import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { BiGlobe, BiMapPin, BiPackage, BiSend } from 'react-icons/bi'
import { BsTruck } from 'react-icons/bs'

export default function Inquiry() {
  const location = useLocation()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: '1',
    message: '',
  })
  const pathname = location.pathname.split('/').pop()
  const config = inquiryConfig[pathname] || inquiryConfig['kathmandu_valley']
  const Icon = config.icon

  useEffect(() => {window.scrollTo(0, 0)}, [location])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleReset = () =>{
    setFormData({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: '1',
    message: '',
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Add your submit logic here
  }

  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false)
      handleReset()
    }, 20000)
  }, [submitted])

  if (submitted) {
    return (
      <div className='min-h-screen w-screen pt-28 bg-(--offWhite)/20 flex items-center justify-center'>
        <div className='mainDiv max-w-xl mx-auto px-6 pb-20'>
          <motion.div initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='bg-(--white) rounded-3xl p-12 text-center shadow-sm'>
            <div className='w-20 h-20 rounded-full bg-(--light_green) flex items-center justify-center mx-auto mb-6'>
              <FaCheckCircle size={40} className='text-(--green)' />
            </div>
            <h2 className='text-2xl font-medium text-(--black) mb-3'>
              Inquiry Received
            </h2>
            <p className='text-(--gray)/70 mb-8'>
              We'll get back to you within 24 hours with pricing and delivery details.
            </p>
            <button onClick={() => {
                setSubmitted(false)
                handleReset()
            }}
              className='px-8 py-3 rounded-full bg-(--orange) text-(--white) hover:bg-(--orange)/90 transition-colors cursor-pointer'>
              Done
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-screen pt-28 bg-(--offWhite) relative z-10'>
      <div className='mainDiv max-w-2xl mx-auto px-6 pb-20'>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4'
            style={{ backgroundColor: config.bgColor, color: config.color }}>
            <Icon size={16} />
            {config.label}
          </div>
          <h1 className='text-3xl md:text-4xl font-light text-(--black) mb-3'>
            Get in Touch
          </h1>
          <p className='text-(--gray)/70 max-w-md mx-auto'>
            {config.description}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className='bg-(--white) rounded-3xl p-6 md:p-10 shadow-sm'>
          <div className='grid md:grid-cols-2 gap-5 mb-5'>
            {/* Name */}
            <div>
              <label className='block text-xs uppercase tracking-wider text-(--gray)/60 mb-2'>
                Full Name
              </label>
              <input type='text' name='name' value={formData.name} onChange={handleChange} required
                className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) 
                focus:bg-(--light_orange) outline-none transition-all text-(--black) placeholder:text-(--black)/40'
                placeholder='John Doe'
              />
            </div>

            {/* Email */}
            <div>
              <label className='block text-xs uppercase tracking-wider text-(--gray)/60 mb-2'>
                Email
              </label>
              <input type='email' name='email' value={formData.email} onChange={handleChange} required
                className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) 
                focus:bg-(--light_orange) outline-none transition-all text-(--black) placeholder:text-(--black)/40'
                placeholder='you@email.com'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-5 mb-5'>
            {/* Phone */}
            <div>
              <label className='block text-xs uppercase tracking-wider text-(--black)/60 mb-2'>
                Phone
              </label>
              <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required
                className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) focus:bg-(--light_orange) outline-none transition-all text-(--black) placeholder:text-(--black)/40'
                placeholder='+977-98XXXXXXXX'
              />
            </div>

            {/* Quantity */}
            <div>
              <label className='block text-xs uppercase tracking-wider text-(--black)/60 mb-2'>
                Quantity (Jars)
              </label>
              <select name='quantity' value={formData.quantity} onChange={handleChange}
                className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) focus:bg-(--light_orange) outline-none transition-all text-(--black)'>
                <option value='1'>10 Jar</option>
                <option value='50'>50 Jars</option>
                <option value='100'>100 Jars</option>
                <option value='500'>500 Jars</option>
                <option value='1000'>1000+ Jars (Bulk)</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className='mb-5'>
            <label className='block text-xs uppercase tracking-wider text-(--black)/60 mb-2'>
              Delivery Address
            </label>
            <textarea name='address' value={formData.address} onChange={handleChange} required rows={3}
              className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) focus:bg-(--light_orange) outline-none transition-all text-(--black) placeholder:text-(--black)/40 resize-none'
              placeholder='Street, City, Postal Code'
            />
          </div>

          {/* Message */}
          <div className='mb-8'>
            <label className='block text-xs uppercase tracking-wider text-(--black)/60 mb-2'>
              Message (Optional)
            </label>
            <textarea name='message' value={formData.message} onChange={handleChange} rows={4}
              className='w-full px-4 py-3 rounded-xl bg-(--offWhite) border-2 border-transparent focus:border-(--orange) focus:bg-(--light_orange) outline-none transition-all text-(--black) placeholder:text-(--black)/40 resize-none'
              placeholder='Any special requests or questions...'/>
          </div>

          {/* Submit Button - Dynamic */}
          <motion.button type='submit' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className='w-full flex items-center cursor-pointer justify-center gap-3 py-4 rounded-xl text-(--white) font-medium transition-colors' style={{ backgroundColor: config.color }}>
            <BiSend size={18} />
            {config.label}
          </motion.button>

          {/* Alternative Options */}
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            {Object.entries(inquiryConfig).map(([key, value]) => {
                return(
                key !== pathname && (
                <a key={key} href={`/inquiry/${key}`} className='text-xs text-(--black)/60 hover:text-(--orange) transition-colors'>
                    {value.label}
                </a>
                )
            )})}
          </div>
        </motion.form>
      </div>
    </div>
  )
}


const inquiryConfig = {
  'kathmandu_valley': {
    label: 'Order For Valley',
    icon: BiMapPin,
    description: 'Free delivery within Kathmandu Valley. Delivery within 24-48 hours.',
    color: 'var(--green)',
    bgColor: 'var(--light_green)',
  },
  'national': {
    label: 'Order For Nepal',
    icon: BsTruck,
    description: 'Delivery across Nepal via courier. 3-5 business days.',
    color: 'var(--orange)',
    bgColor: 'var(--light_orange)',
  },
  'international': {
    label: 'International Inquiry',
    icon: BiGlobe,
    description: 'We ship to select countries. Customs and shipping fees apply.',
    color: 'var(--secondary_orange)',
    bgColor: 'var(--light_orange)',
  },
  'bulk_order': {
    label: 'Bulk Order Request',
    icon: BiPackage,
    description: 'Wholesale pricing for restaurants, retailers, and events. Minimum 50 jars.',
    color: 'var(--dark_orange)',
    bgColor: 'var(--light_orange)',
  },
}