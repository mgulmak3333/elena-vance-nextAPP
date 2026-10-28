'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import './Header.css';
import './Bar.css';
import './Bar_button.css';

export default function Header(){

    const [menuAcikmi, setMenuAcikmi] = useState(false);

    const navHead = useRef<HTMLElement>(null);
    useEffect(() =>{
        const currentNavHead = navHead.current;
        if(!currentNavHead) return;

        const handleScroll = () =>{
            if(window.scrollY > 120){
                navHead.current?.classList.add('headActive');
            }
            else{
                navHead.current?.classList.remove('headActive');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);


    return(
        <>
            <header className="head flex flex-col w-auto h-auto items-center" ref={navHead}>
                <div className="container1 w-full flex  justify-center items-center px-2 gap-10">
                    <Link href="/">
                        <div className="logo  flex">
                            <Image src="/images/profile.webp" alt="Profile" width={40} height={40} priority className="rounded-full w-[40px] h-[40px]" />
                        </div>
                    </Link>

                    <div className="center-pag">
                        <h1>Elena Vance</h1>
                    </div>

                    <div className="bar flex">
                        <label className="hamburger">
                            <input type="checkbox" id="menuToggle" checked={menuAcikmi} onChange={(e) => setMenuAcikmi(e.target.checked)} />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    
                    </div>
                </div>

                <nav className={`navLi ${menuAcikmi ? 'navli_Active' : ''}`}>
                    <ul>
                        <li><a href="/#About">About</a></li>
                        <li><a href="/#Practice-Areas">Practice Areas</a></li>
                        <li><a href="/#Experience">Experience</a></li>
                        <li>
                            <Link href="/appointment">
                                <button className="button type1 mt-2">
                                    <span className="btn-txt">Appointment</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}