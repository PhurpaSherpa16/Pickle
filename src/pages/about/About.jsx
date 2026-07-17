import { motion } from 'framer-motion'
import { content, history, howWeWork, team } from '../../data/about'

export default function About() {
  return (
    <div className='min-h-screen w-screen pt-28 bg-[#faf7f2]'>
      <div className='mainDiv max-w-6xl mx-auto px-6 pb-20'>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'>
          <p className='text-xs uppercase tracking-[0.2em] text-[#9c8b7a] mb-4'>
            {history.est}
          </p>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-(--dark_orange) leading-tight mb-4'>
            Real Achar,<br />
            <span className='italic '>Real Heritage</span>
          </h1>
          <p className='text-[#6b6b6b] text-lg max-w-2xl mx-auto leading-relaxed'>
            {history.supporting}
          </p>
        </motion.div>

        {/* Story Section */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <img src='/g8.jpg' alt='Traditional kitchen' className='w-full h-[400px] lg:h-[500px] object-cover rounded-2xl'/>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-2xl md:text-3xl font-light text-[#2a1a0f] mb-6'>
                {content.title}
            </h2>
            <div className='space-y-4 text-[#6b6b6b] leading-relaxed'>
              <p>{content.supporting1}</p>
              <p>{content.supporting2}</p>
              <p>{content.supporting3}</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-24'
        >
          <h2 className='text-2xl md:text-3xl font-light text-[#2a1a0f] text-center mb-12'>
            How We Work
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {howWeWork.map((item) => (
              <div key={item.num} className='bg-white rounded-2xl p-8 border border-[#e8e0d5]'>
                <p className='text-xs uppercase tracking-[0.2em] text-[#9c8b7a] mb-4'>{item.num}</p>
                <h3 className='text-xl font-medium text-[#2a1a0f] mb-3'>{item.title}</h3>
                <p className='text-[#6b6b6b] text-sm leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='mb-24'>
          <h2 className='text-2xl md:text-3xl font-light text-[#2a1a0f] text-center mb-12'>
            The People Behind the Jars
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {team.map((person) => (
              <div key={person.name} className='text-center'>
                <div className='w-full aspect-square rounded-2xl bg-[#e8e0d5] mb-4 overflow-hidden'>
                  <img 
                    src={person.img} 
                    alt={person.name}
                    className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
                  />
                </div>
                <h3 className='font-medium text-[#2a1a0f]'>{person.name}</h3>
                <p className='text-sm text-[#9c8b7a]'>{person.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}