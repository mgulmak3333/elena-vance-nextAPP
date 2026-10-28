'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Practice from './components/Practice/Practice';
import Experience from './components/Experience/Experience';
import Counsel from './components/Counsel/Counsel';
import Footer from './components/Footer/Footer';



export default async function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () =>{
      lenis.destroy();
    }
  },[]);

   
    

  return (
    <>
      <Header />
      <Main />
      <About />
      <Practice />
      <Experience />
      <Counsel />
      <Footer />
    </>
  );
}