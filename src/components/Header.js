import Nav from './Nav';
import Socials from '../components/Socials';
import LogoWhite from '../assets/img/header/logo.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeIn } from '../variants';

const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',

  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);


  }, []);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? 'show' : 'hidden'}
      className="bg-pink-200 fixed w-full max-w-[1800px] z-50 py-4"
    >
      <div className="container mx-auto">
        <div className='flex justify-between items-center px-4 lg:px-0'>
          <motion.div
            className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex  flex-col items-center justify-center 
              w-12 h-12 p-3 order-2  lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNav(!nav)}>

            <motion.div initial={{ rotate: 0, }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className='w-full h-[2px] bg-white'
            >

            </motion.div>
            <motion.div initial={{ rotate: 0, }}
              animate={{ rotate: nav ? 45 : 0 }}
              className='w-full h-[2px] bg-white'
            >

            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
          >
            <a href="#">
              <img
                className={'w-[90px] h-[90px] rounded-full'
                }
                src={LogoWhite}
              />
            </a>
          </motion.div>
          <div className='hidden lg:flex'>
            <Socials />
          </div>
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? 'show' : 'hidden'}
            className="absolute bg-[#D5C7A3] w-[310px] h-[50vh] 
          right-0 lg:left-0 top-[140px] bottom-0 z-50 rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
