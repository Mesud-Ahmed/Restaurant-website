import React from 'react';
import { menuData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    show: { opacity: 1, x: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.6 } },
  };

  return (
    <section id="menu" className="relative">
      {/* Background Section */}
      <div className="h-[780px] bg-menu absolute w-full -z-0 mb-2">
        <div className="relative z-10 top-72 lg:top-52">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="container mx-auto flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeIn('down', 'tween', 0.2, 1.6)}
              className="capitalize h2 text-white max-w-[400px] text-center"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 'tween', 0.4, 1.6)}
              className="text-white/70 capitalize mb-8"
            >
              {subtitle}
            </motion.p>
            <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
              <img src={modelImg} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Menu Items Section */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween', delay: 0.2, duration: 1.6, ease: 'easeOut' }}
        className="pt-[200px] relative top-80 lg:pt-[220px] lg:top-90"
      >
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={menuItemVariants}
                custom={index} // Pass index for staggered delay
                transition={{ delay: index * 0.2 }} // Stagger by 0.2s per item
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover"
                />
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-accent text-2xl font-semibold mb-4">
                    {item.price}
                  </p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <a
            href="tel:+251912345678"
            className="btn capitalize mx-auto lg:mx-0 flash-btn flex items-center justify-center"
          >
            📞 {btnText}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;