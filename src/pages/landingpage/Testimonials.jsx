import React, { useState, useEffect, useRef } from 'react'
import { Review } from './Introduction'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'

const testimonialsData = [
  {
    id: "01",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video1.mp4",
    type: "video",
    name: "Ankur Joshi",
    location: "Kathmandu",
    avatar: "/avatar1.png",
    rating: 4,
    description:
      "The first bite took me straight back to my grandmother's kitchen in Pokhara. It’s not just pickle; it’s memory. The balance of spice and tang is perfect—no artificial aftertaste, no unnecessary oil. You can taste the care in every crunch.",
  },
  {
    id: "02",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video4.mp4",
    type: "video",
    name: "Priya Shrestha",
    location: "Lalitpur",
    avatar: "/avatar2.png",
    rating: 5,
    description:
      "I've tried many homemade pickles, but this one stands out. The freshness, authentic Nepali spices, and perfect level of heat make it a staple in my home. It pairs beautifully with dal bhat and even simple rice.",
  },
  {
    id: "03",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video5.mp4",
    type: "video",
    name: "Ramesh Gurung",
    location: "Pokhara",
    avatar: "/avatar3.png",
    rating: 5,
    description:
      "The Chicken Achar exceeded my expectations. Every piece is flavorful, juicy, and coated with perfectly roasted spices. It reminds me of the achar my mother used to prepare during Dashain.",
  },
  {
    id: "04",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video1.mp4",
    type: "video",
    name: "Sujata Rai",
    avatar: "/avatar1.png",
    location: "Dharan",
    rating: 4,
    description:
      "The Mula ko Achar has the perfect balance of sourness and spice. It's crunchy, fresh, and doesn't feel overly oily. Definitely one of the best radish pickles I've had.",
  },
  {
    id: "05",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video3.mp4",
    type: "video",
    name: "Bikash Tamang",
    avatar: "/avatar2.png",
    location: "Bhaktapur",
    rating: 5,
    description:
      "As someone who loves spicy food, the Timur flavor is outstanding. It has that unique citrus kick that lingers pleasantly. You can really tell quality ingredients were used.",
  },
  {
    id: "06",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video2.mp4",
    type: "video",
    name: "Hem Gurnng",
    avatar: "/avatar3.png",
    location: "Butwal",
    rating: 5,
    description:
      "I ordered the Buff Achar and finished half the jar in two days! It's rich, smoky, and incredibly addictive. My family loved it, and we're already planning our next order.",
  },
  {
    id: "07",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video5.mp4",
    type: "video",
    name: "Sandeep Adhikari",
    avatar: "/avatar1.png",
    location: "Chitwan",
    rating: 4,
    description:
      "The packaging was clean, the delivery was quick, and the achar tasted homemade. It's refreshing to find a product that actually delivers what it promises.",
  },
  {
    id: "08",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video1.mp4",
    type: "video",
    name: "Mina Lama",
    avatar: "/avatar2.png",
    location: "Hetauda",
    rating: 5,
    description:
      "The Pork Achar has an incredible depth of flavor. Every bite has the perfect mix of spice, smokiness, and tenderness. It goes with almost everything I eat.",
  },
  {
    id: "09",
    file: "/image1.jpeg",
    type: "image",
    avatar: "/avatar3.png",
    name: "Roshan KC",
    location: "Biratnagar",
    rating: 4,
    description:
      "I bought these as gifts for relatives abroad, and they absolutely loved them. They said it reminded them of home and authentic Nepali flavors they had been missing.",
  },
  {
    id: "10",
    file: "https://ik.imagekit.io/k05httq0p/Pickle/video4.mp4",
    type: "video",
    name: "Sabina Thapa",
    avatar: "/avatar1.png",
    location: "Nepalgunj",
    rating: 5,
    description:
      "This is the kind of achar you keep reaching for. The ingredients taste fresh, the spice blend is authentic, and every jar feels handcrafted with care. Highly recommended!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2) // Default to index 2 (Ramesh Gurung)

  const len = testimonialsData.length
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + len) % len)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % len)
  }

  const activeTestimonial = testimonialsData[activeIndex]

  return (
    <div className={`min-h-screen w-screen relative z-10 transition-colors duration-500`}>
        <div className='mainDiv py-8 md:py-8 pt-16 space-y-16 md:space-y-32 relative z-40'>
            <div className='space-y-4 flex flex-col items-center justify-center'>
                <h1 className={`font-medium transition-colors duration-500 text-(--dark_orange)
                    text-[clamp(2rem,4vw,3rem)]! 2xl:text-[clamp(2rem,5vw,4rem)]! text-center`}>
                    Loved at First Bite
                </h1>
                <p className={`text-center transition-colors duration-500 text-(--orange) md:w-4xl font-extralight
                text-[clamp(0.8rem,1vw+0.8rem,1.8rem)] 2xl:text-[clamp(1.2rem,1vw+1rem,2rem)]`}>
                    Stories of home, memory, and the first bite. From hand-roasting to careful packing, every step is guided.
                </p>
            </div>

            <div className='space-y-16 relative'>
                {/* carousal */}
                <div className='relative'>
                    <TestimonialCarousel 
                        activeIndex={activeIndex} 
                        setActiveIndex={setActiveIndex} 
                        handleNext={handleNext} 
                        handlePrev={handlePrev} 
                        isMobile={isMobile}
                    />
                    <div className='flex items-center justify-center gap-36 md:gap-120 2xl:gap-160 relative top-8 md:-top-4 2xl:top-10 z-40'>
                        <motion.button whileHover={{scale:0.9}} whileTap={{scale: 1}} onClick={handlePrev}
                            className={`p-1 flex items-center justify-center rounded-full bg-(--dark_orange) 
                            transition-colors duration-500 text-(--offWhite) cursor-pointer`}>
                            <IoMdArrowDropleft className='size-8'/>
                        </motion.button>
                        <motion.button whileHover={{scale:0.9}} whileTap={{scale:1}} onClick={handleNext}
                            className={`p-1 flex items-center justify-center rounded-full bg-(--dark_orange) 
                                transition-colors duration-500 text-(--offWhite) cursor-pointer`}>
                            <IoMdArrowDropright className='size-8'/>
                        </motion.button>
                    </div>
                </div>

                {/* details */}
                <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className='flex min-h-56 flex-col items-center gap-8 mt-8'>
                    <div className='flex items-center gap-4'>
                        <img src={activeTestimonial.avatar} alt={activeTestimonial.name} 
                            className='size-12 rounded-full object-cover filter grayscale-80'
                        />
                        <div className='flex flex-col space-y-2'>
                            <div>
                                <h3 className='font-medium text-(--dark_orange) text-sm'>{activeTestimonial.name}</h3>
                                <p className='text-xs text-(--orange)'>{activeTestimonial.location}</p>
                            </div>
                            <Review rating={activeTestimonial.rating}/>
                        </div>
                    </div>
                    <div className='flex items-center relative justify-center'>
                        <p className='relative z-10 text-lg md:w-2xl text-center text-(--dark_orange)/80'>
                            "{activeTestimonial.description}"
                        </p>
                        <BiSolidQuoteLeft className='absolute size-36 z-0 text-(--black)/10 -left-4 -top-10 md:-top-16 2xl:-left-8'/>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

const VideoCard = ({ testimonial, offset, isVisible, getCardStyles, handleNext, handlePrev, setActiveIndex, idx }) => {
  const videoRef = useRef(null)
  const isActive = offset === 0

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(err => {
          console.log("Playback interrupted or blocked: ", err)
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isActive])

  return (
    <motion.video
      ref={videoRef}
      key={testimonial.id}
      src={testimonial.file}
      initial={false}
      animate={getCardStyles(offset)}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, info) => {
        const swipeThreshold = 50
        if (info.offset.x < -swipeThreshold) {
          handleNext()
        } else if (info.offset.x > swipeThreshold) {
          handlePrev()
        }
      }}
      onClick={() => {
        if (!isActive) {
          setActiveIndex(idx)
        }
      }}
      className={`hover:cursor-grab absolute h-80 w-80 md:h-120 md:w-90 2xl:h-140 2xl:w-120 border-4 border-(--white) object-cover object-center transition-shadow duration-500
        ${isActive ? 'shadow-xl cursor-default' : 'shadow-lg cursor-pointer'}
      `}
      style={{
        zIndex: isActive ? 30 : Math.abs(offset) === 1 ? 20 : 10,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      loop
      muted
      playsInline
    />
  )
}

const TestimonialCarousel = ({ activeIndex, setActiveIndex, handleNext, handlePrev, isMobile }) => {
  const len = testimonialsData.length
  const [is2Xl, setIs2Xl] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1536px)')
    setIs2Xl(media.matches)
    const listener = (e) => setIs2Xl(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const getCardStyles = (offset) => {
    const xOffset = is2Xl ? 340 : 248
    const yOffsetNear = is2Xl ? -72 : -48
    const yOffsetFar = is2Xl ? -144 : -96
    const xOffscreen = is2Xl ? 900 : 700

    if (offset === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        filter: 'grayscale(0%)'
      }
    }
    if (offset === -1) {
      return {
        x: -xOffset,
        y: yOffsetNear,
        scale: 0.9,
        opacity: 1,
        filter: 'grayscale(50%)'
      }
    }
    if (offset === 1) {
      return {
        x: xOffset,
        y: yOffsetNear,
        scale: 0.9,
        opacity: 1,
        filter: 'grayscale(50%)'
      }
    }
    if (offset === -2) {
      return {
        x: -xOffset * 2,
        y: yOffsetFar,
        scale: 0.8,
        opacity: 0.5,
        filter: 'grayscale(100%)'
      }
    }
    if (offset === 2) {
      return {
        x: xOffset * 2,
        y: yOffsetFar,
        scale: 0.8,
        opacity: 0.5,
        filter: 'grayscale(100%)'
      }
    }
    return {
      x: offset < 0 ? -xOffscreen : xOffscreen,
      y: yOffsetFar,
      scale: 0.7,
      opacity: 0,
      filter: 'grayscale(100%)'
    }
  }

  return (
    <div className='relative overflow-visible pt-16 pb-16 md:pt-0 lg:pt-8 md:py-12'>
      <div className='flex items-center justify-center relative h-40 md:h-120 2xl:h-140 w-full max-w-5xl 2xl:max-w-7xl mx-auto overflow-visible'>
        {testimonialsData.map((testimonial, idx) => {
          let offset = idx - activeIndex
          if (offset < -len / 2) offset += len
          if (offset > len / 2) offset -= len

          if (isMobile && offset !== 0) {
            return null
          }

          const isVisible = Math.abs(offset) <= 2

          if (testimonial.type === 'video') {
            return (
              <VideoCard
                key={testimonial.id}
                testimonial={testimonial}
                offset={offset}
                isVisible={isVisible}
                getCardStyles={getCardStyles}
                handleNext={handleNext}
                handlePrev={handlePrev}
                setActiveIndex={setActiveIndex}
                idx={idx}
              />
            )
          } else {
            return (
              <motion.img
                key={testimonial.id}
                src={testimonial.file}
                alt={testimonial.name}
                initial={false}
                animate={getCardStyles(offset)}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                drag={offset === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    handleNext();
                  } else if (info.offset.x > swipeThreshold) {
                    handlePrev();
                  }
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActiveIndex(idx)
                  }
                }}
                className={`hover:cursor-grab absolute h-80 w-80 md:h-120 md:w-90 2xl:h-140 2xl:w-120 border-4 border-(--white) 
                  object-cover object-center rounded-2xl transition-shadow duration-500
                  ${offset === 0 ? 'shadow-xl cursor-default' : 'shadow-lg cursor-pointer'}
                `}
                style={{
                  zIndex: offset === 0 ? 30 : Math.abs(offset) === 1 ? 20 : 10,
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              />
            )
          }
        })}
      </div>
    </div>
  )
}


