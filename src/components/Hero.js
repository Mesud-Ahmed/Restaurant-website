
import { heroData } from '../data'
import Header from './Header'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants'

export default function Hero() {
  const { pretitle, title, subtitle } = heroData
  return (
    <section className='relative min-h-[980px]  bg-hero  bg-cover  bg-center md:bg-cover sm:bg-contain'>
      <div className='absolute inset-0 bg-black/50'></div>
      <Header />
      <div className='container mx-auto min-h-[980px] flex justify-center items-center'>
        <motion.div
          className='text-center flex flex-col items-center'
          variants={staggerContainer(0.4, 1)}
          initial='hidden' whileInView={'show'}
        >
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className=' text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1 font-extrabold text-white drop-shadow-lg  '>{pretitle}</motion.div>
          <motion.h1
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className='h1 mb-5 drop-shadow-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-orange-400 '
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 'tween', 0.6, 1.1)}
            className=' bg-gradient-to-r from-amber-600 to-orange-200 bg-clip-text text-transparent drop-shadow-lg  max-w-[450px] mb-8'>{subtitle}</motion.p>


        </motion.div>
      </div>
    </section>
  )
};

