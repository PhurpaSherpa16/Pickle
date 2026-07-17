import React from 'react'
import { shippingPolicies } from '../../data/policies'
import Heading from '../../components/Heading'


export default function ShippingPolicies() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto pt-28 pb-32 mainDiv'>
        <Heading tag={'Customer Support'} title={'Shipping Policies'} 
        supporting={`Every jar of pickle is freshly prepared in small batches. Because
                        our products are food items, our return and refund policy follows
                        strict food safety guidelines while ensuring customer satisfaction.`}/>
        <div className='space-y-6'>
            {shippingPolicies.map((policy) => (
                <div key={policy.sn} className='flex gap-4'>
                <span className='text-(--orange) font-medium'>{policy.sn}</span>
                <div>
                    <h3 className='font-medium text-(--black)'>{policy.title}</h3>
                    <p className='text-sm text-(--black)/60 mt-1'>{policy.supporting}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}
