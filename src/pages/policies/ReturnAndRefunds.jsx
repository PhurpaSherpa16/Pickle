import Heading from "../../components/Heading";
import { returnRefundPolicies } from "../../data/policies";

export default function ReturnRefund() {
  return (
    <div className="min-h-screen w-screen pt-28 pb-20">
        <div className='space-y-6 mx-auto max-w-4xl mainDiv'>
            <Heading tag={'Customer Support'} title={'Return & Refund Policy'} 
            supporting={`Every jar of pickle is freshly prepared in small batches. Because
                our products are food items, our return and refund policy follows
                strict food safety guidelines while ensuring customer satisfaction.`}/>
            {returnRefundPolicies.map((policy) => (
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
  );
}

