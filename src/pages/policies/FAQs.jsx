import React from 'react'
import { faqs } from '../../data/policies'
import Heading from '../../components/Heading'

export default function FAQs() {
  return (
    <div className="min-h-screen w-screen pt-28 pb-20">
        <div className='space-y-6 mx-auto max-w-4xl mainDiv'>
            <Heading tag={'Customer Support'} title={'Frequently Asked Questions'} 
            supporting={`Your questions, answered. Here’s what most people ask about our achar, ordering process, and delivery.`}/>
            <div className='space-y-6'>
                {faqs.map((faq) => (
                    <div key={faq.sn} className='border-b border-(--black)/10 pb-6'>
                        <h3 className='font-medium text-(--black) mb-2'>
                            <span className='text-(--orange) mr-2'>{faq.sn}</span>
                            {faq.question}
                        </h3>
                        <p className='text-sm text-(--black)/60 leading-relaxed'>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
