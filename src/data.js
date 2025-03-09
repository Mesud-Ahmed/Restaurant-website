
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  
} from 'react-icons/fa';

import AboutImg from './assets/img/about/plate.jpeg';
import ModelWhiteImg from '../src/assets/img/model-white.png';

import MenuImg1 from '../src/assets/img/menu/shekla-tibs.webp';
import MenuImg2 from '../src/assets/img/menu/gomen.jpeg';
import MenuImg3 from '../src/assets/img/menu/tibs.jpeg';
import MenuImg4 from '../src/assets/img/menu/kitfo.jpeg';

import ChefImg from '../src/assets/img/team/cheff.jpeg';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '#about', name: 'about' },
  { href: '#menu', name: 'menu' },
  { href: '#team', name: 'team' },
  { href: '#testimonial', name: 'testimonials' },
  { href: '#contact', name: 'contact' },
];

export const heroData = {
  pretitle: 'A Taste of Tradition',
  title: 'Anwar Cultural Tibs and Ketfo',
  subtitle:
    'Savor the Authentic Flavors of Ethiopia, Crafted with Love and Heritage. ',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle: (
    <>
      For over five years, we've been serving up the finest cultural foods, loved by our loyal customers. From our humble beginnings to now having three thriving branches, we've always been dedicated to delivering Ethiopian foods, made fresh with care.
      <br />
      <br />
      As a family-owned restaurant, we take pride in offering a <span className='text-green-300'>100% halal menu</span> , ensuring that everyone can enjoy our delicious meals with peace of mind. 
    </>
  ),
  
  image: AboutImg,
};

export const menuData = {
  title: 'Explore Our Menu',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'Order Now',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Shekla Tibs',
      price: '600 birr',
      description: 'Perfectly cooked to crispy golden perfection.',
    },
    {
      image: MenuImg2,
      name: 'Gomen Kitfo',
      price: '800 birr',
      description: 'Enjoy the flavorful experience Ethiopian gomen.',
    },
    {
      image: MenuImg3,
      name: 'Tibs',
      price: '500 birr',
      description: 'Succulent grilled beef cubes seasoned with Ethiopian spices.',
    },
    {
      image: MenuImg4,
      name: 'Kitfo',
      price: '700 birr',
      description: 'Finely chopped raw beef, spiced with mitmita, served with injera.',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Chef Sara Peter is the heart and soul behind our kitchen, bringing over a decade of culinary experience to every dish. With a passion for creating delicious meals, he ensures every bite is full of flavor, tenderness, and perfection.',
  sub2: ' As the executive chef, Sara takes pride in using only the finest ingredients and halal-certified products, crafting an unforgettable dining experience for all who walk through our doors.',
  name: 'jhon peter',
  occupation: 'executive chef',
  
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Their Cultural foods are delicious and superb. Service is good. Good Cultural coffee ☕. Crowd lunch time. Fair price. ',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'local guide',
    },
    {
      message:
        "This restaurant is so good, Price is fair. The foods are quality and taste very good. Anyone who’s thinking if they should try this place? Yes, you should definitely try their",
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO ',
    },
    {
      message:
        'Now this is where you want to go for traditional meat.. Ordering can .',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'customer',
    },
  ],
};





export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '095 439 3939',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      
    ],
  },
};
