'use client';
import Image from "next/image"
import { useEffect, useRef } from "react";

import './About.css';


export default function About(){
    const animAboutIMG = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const currentIMG = animAboutIMG.current;
        if (!currentIMG) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('about-right-img-anim');
            observer.unobserve(entry.target);
        }, { threshold: 0.5 });

        observer.observe(currentIMG);
        return () => observer.disconnect();
    }, []);

    return(
        <>
        <section id="About" className="about flex items-center justify-center py-[50px]">
            <div className="container2 flex w-full">
                <div className="section-text">
                    <div className="about-head">
                        <span>About The Attorney</span>
                        <div className="avatar-2">
                            <h2>Elena Vance</h2>
                            <Image src="/images/human1bb.webp" width={832} height={768} priority alt="Profile About" />
                        </div>
                        <div className="w-full h-[1px] bg-[#E5D7C6]/15 my-3"></div>
                    </div>

                    <article>
                        <div className="paragraph flex flex-col gap-5">
                            <p>With over fifteen years of distinguished practice in corporate litigation and international arbitration, <strong>Elena Vance</strong>  provides strategic counsel to global enterprises, private equity funds, and high-net-worth individuals. She operates at the intersection of complex legal frameworks and commercial strategy, ensuring every mandate is executed with unmatched precision and discretion.</p>
                        
                            <p>Beyond courtroom advocacy, Elena serves as a trusted advisor to C-suite executives on crisis management, cross-border disputes, and regulatory governance. Her practice remains dedicated to a refined standard of legal excellence—where elite legal intellect meets decisive, measurable outcomes.</p>
                        </div>
                    </article>
                </div>

                <div className="about-profile">
                    <Image src="/images/profile-about.webp" width={800} height={800} priority ref={animAboutIMG} alt="Profile About" />
                </div>
            </div>
        </section>
        </>
    )
}