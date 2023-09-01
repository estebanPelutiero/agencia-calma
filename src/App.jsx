import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import LandingExplain from './components/LandingExplain';
import OurServiceInclude from './components/OurServiceInclude';
import Footer from './components/Footer';
import Spinner from './components/Spinner';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, [])

 
  if (loading) {
     return <Spinner loading={loading} />
  }

  return (
    <>
      <Nav />
      <Hero />
      <WhatWeOffer />
      <LandingExplain />
      <OurServiceInclude />
      <Footer />
    </>
  )
}

export default App
