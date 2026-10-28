'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

import Header from '@/app/components/Header/Header';
import Form from '@/app/components/Form/Form';



export default function AppointmentPage() {

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
      <Form />
    </>
  );
}