
import Copyright from './Copyright'
import Socials from './Socials';
import { footerData } from '../data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'

const Footer = () => {
  const { contact, hours, social } = footerData

  return (
    <footer id="contact" className='relative top-96 lg:top-80 z-10 bg-dark lg:bg-transparent lg:min-h-[720px]
     lg:bg-footer lg:bg-cover lg:bg-no-repeat pt-20 lg:pt-32 '>
      <div className='container mx-auto h-full '>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}

          className='h-full  gap-y-4'>

          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='flex flex-col lg:flex-row lg:gap-x-[130px] 
          gap-y-12 lg:gap-y-0 lg:mb-12'>
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='capitalize text-[20px] lg:text-[22px] 
              font-normal text-white font-primary '>{contact.title}</div>
            </div>
            <div className="py-3">
              <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="font-semibold">Branch 1 - Betel</h3>
                  <a
                    href="https://g.co/kgs/A16z3Kv"
                    className="flash-btn text-red-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Betel Street, Addis Ababa
                  </a>
                  <p>Phone: 095 439 3939</p>
                </div>
                <div>
                  <h3 className="font-semibold">Branch 2 - Bole</h3>
                  <a
                    href="https://maps.app.goo.gl/fgGDkn6gmuFDVP6s5"
                    className="flash-btn text-red-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Airport Street, Addis Ababa
                  </a>
                  <p>Phone: 095 439 3939</p>
                </div>
              </div>
            </div>

          </motion.div>
          <div className='flex-1'>
            <div className='capitalize text-[20px] lg:text-[22px] 
              font-normal text-white font-primary mb-[22px]'>{hours.title}</div>
            <div className='flex gap-x-[46px]'>
              {hours.program.map((item, index) => (
                <div className='capitalize' key={index}>
                  <div>
                    <div>{item.days}</div>
                    <div className='text-[20px] text-accent'>{item.hours}</div>
                  </div>
                </div>

              ))}
            </div>
          </div>
          <div className='flex-1 lg:max-w-[280px] mb-12 '>
            <div className='capitalize text-[20px] lg:text-[22px] 
              font-normal text-white font-primary mb-[22px]'>{social.title}</div>
            <Socials />

          </div>

          <Copyright />

        </motion.div>
      </div>
    </footer>
  )
};

export default Footer;
