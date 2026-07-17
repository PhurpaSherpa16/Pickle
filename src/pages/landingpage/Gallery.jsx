
export default function Gallery() {
  return (
    <div id="gallery" className='min-h-screen w-screen relative bg-(--offWhite) bottom-12'>
        <div className='mainDiv py-16 md:py-32 space-y-16 md:space-y-24 relative z-20'>
            <div className='space-y-4 flex flex-col items-center justify-center'>
                <h1 className={`font-medium transition-colors duration-500 
                    text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]! 
                    text-center text-(--dark_orange)`}>
                    The Story Behind the Flavor
                </h1>
                <p className={`text-center transition-colors duration-500 w-3xl font-extralight
                text-[clamp(0.8rem,1vw+0.8rem,1.8rem)] text-(--orange) 2xl:text-[clamp(1.2rem,1vw+1rem,2rem)]`}>
                    Every ingredient, every step, and every jar reflects our commitment to authentic craftsmanship.
                </p>
            </div>
            
            <div className='space-y-16'>
                <GalleryCard left={false} source1={'/g1.jpg'} source2={'/g7.jpg'} image1='object-top' image2='object-top'/>
                <GalleryCard left={true} source1={'/g5.png'} source2={'/g8.jpg'} image1='object-bottom 2xl:object-top' image2='object-center'/>
                <GalleryCard left={false} source1={'/g6.jpg'} source2={'/image2.webp'} image1='object-center' image2='object-bottom'/>
            </div>
        </div>
    </div>
  )
}

const GalleryCard = ({left, source1, source2, className1='h-100 md:h-150', className2='h-100 md:h-150', image1, image2}) => {
    return(
        <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
            <div className={`${className1} ${left ? 'w-full lg:w-2/5' : 'w-full lg:w-3/5'}  bg-red-400 rounded overflow-hidden`}>
                <img src={source1} alt="gallery image" className={`h-full w-full object-cover ${image1}
                hover:scale-105 
                transition-all duration-300 ease-in filter grayscale-70 hover:grayscale-0`}/>
            </div>
            <div className={`${className2} ${left ? 'w-full lg:w-3/5' : 'w-full lg:w-2/5'} bg-green-400 rounded overflow-hidden`}>
                <img src={source2} alt="gallery image" className={`h-full w-full object-cover ${image2} hover:scale-105 
                transition-all duration-300 ease-in filter grayscale-70 hover:grayscale-0`}/>
            </div>
        </div>
    )
}
