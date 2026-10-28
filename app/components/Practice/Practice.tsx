'use client';
import { useEffect } from 'react';

import './Practice.css';
import './Card.css';



export default function Practice(){

    useEffect(() => {
        
        const cards = document.querySelectorAll('.card');
        const cardsAnim_observer = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                if(!entry.isIntersecting) return;

                if(entry.target.id == 'card1'){
                    entry.target.classList.add('card1Active');
                } 
                else if(entry.target.id == 'card2'){
                    entry.target.classList.add('card2Active');
                } 
                else if(entry.target.id == 'card3'){
                    entry.target.classList.add('card3Active');
                }
            });
        }, {threshold: 0.5});

        cards.forEach(oneCard => {
            cardsAnim_observer.observe(oneCard);
        });
        return () => cardsAnim_observer.disconnect();       
        
    }, []);

    return(
        <>
            <section id="Practice-Areas" className="practice-ar flex flex-col ">
                <div className="section-text">
                    <div className="practice-head">
                        <span>// AREAS OF EXPERTISE</span>
                        <h2>Practice Areas & Legal Counsel</h2>
                        <div className="w-full h-[1px] bg-[#E5D7C6]/15 my-3"></div>
                    </div>
                </div>

                <div className="card-area flex row gap-8 flex-wrap">
                    <div className="card" id="card1">
                        <div className="number">
                            <p className="text">01</p>
                        </div>
                        
                        <p className="heading">Corporate Litigation & Arbitration</p>
                        <p className="content">
                            Representing global corporations and financial institutions in high-stakes commercial disputes. Delivering decisive strategy and representation across international arbitration tribunals.
                        </p>
                        <a href="#" className="mt-8 pt-4 border-t border-[#3B1214]/10 flex items-center justify-between text-xs font-montserrat tracking-widest uppercase text-[#3B1214]/70 group-hover:text-[#3B1214] transition-colors">
                            <span>Explore Practice</span>
                            <span className="text-sm font-light font-[20px]">→</span>
                        </a>
                    </div>

                    <div className="card" id="card2">
                        <div className="number">
                            <p className="text">02</p>
                        </div>
                        
                        <p className="heading">Cross-Border M&A Strategy</p>
                        <p className="content">
                            Navigating multi-jurisdictional regulatory frameworks and complex corporate restructurings. Providing cross-border legal counsel for high-value mergers, acquisitions, and strategic global ventures.
                        </p>
                        <a href="#" className="mt-8 pt-4 border-t border-[#3B1214]/10 flex items-center justify-between text-xs font-montserrat tracking-widest uppercase text-[#3B1214]/70 group-hover:text-[#3B1214] transition-colors">
                            <span>Explore Practice</span>
                            <span className="text-sm font-light">→</span>
                        </a>
                    </div>

                    <div className="card" id="card3">
                        <div className="number">
                            <p className="text">03</p>
                        </div>
                        
                        <p className="heading">Crisis Management & Governance</p>
                        <p className="content">
                            Delivering discreet, high-level counsel for C-suite executives and boards under public scrutiny. Safeguarding corporate reputation while managing complex regulatory investigations and audits.
                        </p>
                        <a href="#" className="mt-8 pt-4 border-t border-[#3B1214]/10 flex items-center justify-between text-xs font-montserrat tracking-widest uppercase text-[#3B1214]/70 group-hover:text-[#3B1214] transition-colors">
                            <span>Explore Practice</span>
                            <span className="text-sm font-light">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}