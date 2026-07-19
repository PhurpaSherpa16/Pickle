import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function CTAButton({label='Order Now', link='/products', 
    className='bg-(--orange) border-(--orange)', span='group-hover:text-(--orange)', className2='bg-white', className3='text-(--orange)'}) {
  return (
    <Link to={link} className={` py-3 pl-6 pr-4 2xl:py-4 2xl:pl-8 2xl:pr-4 rounded-full text-(--white) 
    flex items-center gap-12 2xl:gap-24 w-fit group overflow-hidden border hover:shadow-lg
    transition-all
    group cursor-pointer ${className}`}>
        <span className={`${span} relative  2xl:text-lg font-medium z-10 2xl:tracking-wide`}>{label}</span>
        <div className='relative flex items-center justify-center'>
            <div className={`rounded-full h-8 w-8 2xl:h-10 2xl:w-10
            group-hover:w-400 2xl:group-hover:w-[800px] 
            group-hover:h-60 2xl:group-hover:h-30
                transition-all duration-400 ease-in
                absolute ${className2}`}/>
            <FiArrowUpRight className={`relative z-10 size-6 2xl:size-8 group-hover:rotate-45 transition-all duration-300 ${className3}`}/>
        </div>
    </Link>
  )
}
