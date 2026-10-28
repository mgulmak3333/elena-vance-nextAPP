'use client';
import { useEffect } from 'react';

import './Experience.css';

export default function Experience(){

    useEffect(() =>{

        const experienceList = document.querySelectorAll('.experince-list ul li');
        const exList_observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return;

                if(entry.target.id == 'exL1'){
                    entry.target.classList.add('exL1Active');   
                }
                else if(entry.target.id == 'exL2'){
                    entry.target.classList.add('exL2Active');
                }
                else if(entry.target.id == 'exL3'){
                    entry.target.classList.add('exL3Active');
                }
            });
        }, {threshold: 0.5});

        experienceList.forEach(oneList => {
            exList_observer.observe(oneList);
        });
    }, []);

    return(
        <>
            <section id="Experience" className="experince flex flex flex-col px-[50px]">
                <div className="section-text">
                    <div className="practice-head">
                        <span>// TRACK RECORD</span>
                        <h2>Precission & Results.</h2>
                        <div className="w-full h-[1px] bg-[#E5D7C6]/15 my-3"></div>
                    </div>
                </div>

                <div className="experince-list">
                    <ul className="flex flex-col gap-10">
                        <li className="flex items-center gap-4" id="exL1">
                            <div className="list-head flex">
                                <span>15+</span>
                            </div>
                            <div className="list-area flex flex-col gap-1">
                                <div className="list-area-head flex gap-2 items-center">
                                    <h3>15+</h3>
                                    <span>Years of Practice</span>
                                </div>
                                <p>High-stakes corporate litigation and international arbitration.</p>
                            </div>
                        </li>
                        
                        <li className="flex items-center gap-4" id="exL2">
                            <div className="list-head flex">
                                <span>$2.5B+</span>
                            </div>
                            <div className="list-area flex flex-col gap-1">
                                <div className="list-area-head flex gap-2 items-center">
                                    <h3>$2.5B+</h3>
                                    <span>Transaction Volume</span>
                                </div>
                                <p>Cumulative value across cross-border M&A and restructuring mandates.</p>
                            </div>
                        </li>
                        
                        <li className="flex items-center gap-4" id="exL3">
                            <div className="list-head flex">
                                <span>100%</span>
                            </div>
                            <div className="list-area flex flex-col gap-1">
                                <div className="list-area-head flex gap-2 items-center">
                                    <h3>100%</h3>
                                    <span>Confidentiality</span>
                                </div>
                                
                                <p>Absolute discretion maintained across sensitive C-suite engagements.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}