import TestimonialCarousel from './TestimonialCarousel'
import { testimonialData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData
  return (
    <section id='testimonial' className='bg-testimonial bg-cover bg-no-repeat relative
    top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px]'>

      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          initial='hidden'
          whileInView={'show'}

          className='text-center capitalize flex flex-col items-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <p className='text-white/70 capitalize mb-8'>{subtitle}</p>
          <div className='mb-12'>
            <img src={modelImg} />
          </div>

        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          initial='hidden'
          whileInView={'show'}
          className='flex justify-center items-center'>
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  )
};

export default Testimonial;
