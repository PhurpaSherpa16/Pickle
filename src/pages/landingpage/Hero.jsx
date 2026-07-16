import CTAButton from '../../components/CTAButton'

export default function Hero() {
  return (
    <div className='relative'>
        {/* background image */}
        <div className='relative'>
            <div className='absolute inset-0 bg-black/60 md:bg-black/60 md:backdrop-blur-[3px] h-screen w-screen z-20 md:z-0'/>
            <img src={siteData.HeroBackground} alt="background image" 
            className='h-screen w-screen object-cover object-center'/>
            <div className='absolute bottom-10 -left-14 md:left-30 2xl:left-50'>
                <img src={siteData.HeroImage} alt="background image" 
                className='h-fit md:h-130 2xl:h-150 w-fit object-cover object-center 
                filter brightness-[0.7] saturate-70
                relative z-10'/>
                <div className='hidden md:block bg-black z-10 h-16 w-60 2xl:w-70 rounded-full absolute 
                bottom-0 left-1/2 -translate-x-1/3 blur-2xl'/>
                <div className='bg-linear-to-tr from-black to-transparent z-10 h-4 w-70 2xl:w-90 rounded-full absolute 
                bottom-2 left-1/2 -translate-x-1/3 blur-md'/>
            </div>
        </div>

        {/* content */}
        <div className='absolute z-20 w-screen inset-0 mainDiv'>
            <div className='relative top-40 md:top-80 lg:top-40 2xl:top-50 space-y-8'>
                <div className='space-y-4'>
                    <h1 className='font-[veldman] text-center md:text-right uppercase 
                    text-[calc(80px+3.5vw)] 
                    md:text-[calc(160px+3.5vw)] 
                    2xl:text-[calc(180px+5vw)] 
                    leading-[0.8] text-(--white)'>CHICKEN 
                    <br />
                    ACHAR</h1>
                    <h2 className='md:text-right text-center font-bold text-(--offWhite)'>Hand-roasted | Small-batch | Bold flavor</h2>
                </div>
                <div className='space-y-4 flex flex-col items-end'>
                    <p className='md:w-lg w-full text-center md:text-right text-(--offWhite)'>Made for people who love deep, spicy flavor with a premium touch, this roasted chicken achar brings.</p>
                    <p className='md:w-sm w-full text-center md:text-right text-(--offWhite)'>Inspired by the kind of flavor that makes a simple meal unforgettable,</p>
                </div>
                <div className='flex items-center justify-center md:items-end md:justify-end'>
                    <CTAButton label='Order Now'
                    link={'/product/1'}/>
                </div>
            </div>
        </div>

        {/* wave and price */}
        <div className='absolute -bottom-36 md:-bottom-34 2xl:-bottom-48 w-screen'>
            <img src='/hero_wave.svg' alt="background" className="relative w-full h-60 2xl:h-80 bottom-5 z-20 md:z-0"/>
            <div className='bg-(--white) rounded-full size-32 2xl:size-40 border border-(--white)/30 
                    absolute
                    right-1/2 translate-x-1/2 top-0
                    md:right-60 md:-top-10
                    lg:right-1/2 lg:translate-x-1/2 lg:-top-16 
                    2xl:bottom-4
                    z-20
                    flex items-center justify-center'>
                <div className='flex flex-col items-center -rotate-15'>
                    <span className='block text-center text-(--secondary_orange)'>Rs.</span>
                    <span className='block text-center text-2xl font-bold text-(--secondary_orange)'>650/-</span>
                    <span className='block text-center text-(--secondary_orange)'>500gm</span>
                </div>
            </div>
        </div>
    </div>
  )
}


const siteData = {
    HeroBackground :'https://ik.imagekit.io/k05httq0p/Pickle/pickle_background.png',
    HeroImage : 'https://ik.imagekit.io/k05httq0p/Pickle/chicken_achar.png'
}