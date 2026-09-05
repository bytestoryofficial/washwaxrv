/* eslint-disable no-unused-vars */
import Gallery from './components/gallery/Gallery';
import Service from './components/service/Service';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';
import FindUs from './components/findUs/FindUs';
import Reason from './components/reason/Reason';
import MainLayout from 'layout/MainLayout';
import Hero from './components/hero/Hero';

import heroBg from 'assets/hero.png';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero image={heroBg} />
      <Reason />
      <Service />
      <Reviews />
      <Gallery />
      <Contact />
      <FindUs />
    </MainLayout>
  );
};

export default HomePage;
