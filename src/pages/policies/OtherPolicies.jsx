import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allRightsReserved, privacyPolicy, termsAndConditions } from '../../data/policies'
import Heading from '../../components/Heading'

const policies = [allRightsReserved, privacyPolicy, termsAndConditions]

export default function OtherPolicies() {
  const location = useLocation()
  const sectionRefs = useRef({})

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && sectionRefs.current[hash]) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        sectionRefs.current[hash].scrollIntoView({ behavior: 'auto' })
      }, 100)
    }
  }, [location.hash])

  return (
    <div className='min-h-screen w-screen pt-28 bg-(--offWhite)'>
      <div className='mainDiv max-w-3xl mx-auto px-6 pb-20'>

        {/* Page Header */}
        <Heading tag={'Policies'} title={'Legal & Policies'} 
        supporting={`Transparency in how we operate, protect your data, and respect your rights.`}/>

        {/* Policy Sections */}
        {policies.map((policy) => (
          <div
            key={policy.sn}
            id={policy.hash}
            ref={(el) => {
              sectionRefs.current[policy.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')] = el
            }}
            className='mb-16 scroll-mt-32'
          >
            {/* Section Header */}
            <div className='flex items-center gap-4 mb-8'>
              <span className='text-4xl font-light text-(--orange)'>
                {policy.sn}
              </span>
              <h2 className='text-2xl md:text-3xl font-light text-(--black)'>
                {policy.title}
              </h2>
            </div>

            {/* Content Blocks */}
            <div className='space-y-8'>
              {policy.content.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-(--white) rounded-2xl p-6 md:p-8 border border-(--black)/5'
                >
                  <h3 className='font-medium text-(--black) mb-3'>
                    {block.heading}
                  </h3>
                  <p className='text-sm text-(--black)/60 leading-relaxed'>
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}