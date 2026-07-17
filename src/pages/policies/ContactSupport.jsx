import Heading from '../../components/Heading'
import { contactSupportPolicies } from '../../data/policies'

export default function ContactSupport() {
  return (
    <div className="min-h-screen w-screen pt-28 pb-20">
        <div className='space-y-6 mx-auto max-w-4xl mainDiv'>
            <Heading tag={'Customer Support'} title={'Contact Support'} 
            supporting={`We’re here to help. Reach out through any channel that works for you — phone, email, live chat, or in person. Our team in Kathmandu responds within 12 hours and resolves urgent issues within 2 hours.`}/>
            <div className='space-y-6'>
            {contactSupportPolicies.map((policy) => (
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
    </div>
  )
}
