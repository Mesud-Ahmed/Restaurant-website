
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat  mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      
      <Footer />
      <div className='h-[480px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
