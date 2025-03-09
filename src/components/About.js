import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../variants';
import { aboutData } from '../data';
import { useState, useRef } from 'react';

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); 

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
      setIsPlaying(true); 
    }
  };

  return (
    <section id="about" className="min-h-[620px]">
      <div className="pt-3 w-full relative">
        <video
          ref={videoRef} 
          className="w-full h-[500px] object-fit: fill"
          muted
          controls
          onPlay={() => setIsPlaying(true)} 
        >
          <source src="/introVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-white bg-opacity-70 rounded-full p-4 animate-pulseCustom
                       hover:bg-opacity-90 transition-opacity duration-300"
            onClick={handlePlay} 
          >
            <svg
              className="w-12 h-12 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>

      <div className="container mx-auto min-h-[620px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center gap-8"
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px] mx-auto lg:mx-0">{subtitle}</p>
            
          </motion.div>

          <motion.div
            variants={plateVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <img
              src={image}
              alt="About Us"
              className="max-w-full h-[300px] rounded-full shadow-2xl border-4 border-orange-500 hover:shadow-4xl transform transition duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;