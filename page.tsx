import React from 'react'
import Header from './components/Header';
import Hero from './components/hero/Hero';
import Men from './components/men/page';
import Women from './components/women/page';
import Sale from './components/sale/page';
import Footer from './components/Footer';
import Product from './components/product-Detail/page';
import Detail from './components/detail/page';
import Loging from './components/loging/page';
import JoinUs from './components/joinus/page';
import ContactUs from './components/detail/contactus/page';
import Cart from './components/cart/page';
import Check from './components/check/page';

const Home = () => {
  return (
    <div>
     <Header/> 
      <Hero/>
    <Men/>
    <Women/>
    <Sale/>
    <Footer/>
    <Header/>
    <Product/>
    <Footer/>
    <Header/>
    <Detail/>
    <Footer/>
    <Header/>
    <Loging/>
    <Footer/>
    <Header/>
    <JoinUs/>
    <Footer/>
    <Header/>
    <ContactUs/>
    <Footer/>
    <Header/>
    <Cart/>
    <Footer/>
    <Header/>
    <Check/>
    <Footer/>
    

    
    </div>
  )
}

export default Home;
