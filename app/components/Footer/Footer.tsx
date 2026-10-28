'use client';
import Link from 'next/link';

import './Footer.css';


export default function Footer(){
    return(
        <>
            <footer className="flex flex-col">
                <div className="foot-contain w-full ">
                    <div className="foot flex  flex-wrap">

                        <div className="contact">
                            <div className="contact-head">
                                <span>CONTACT</span>
                                <div>
                                    <p>Retain Counsel for</p>
                                    <p>High-Stakes Matters.</p>
                                </div>
                            </div>
                            
                            <div className="contact-mail">
                                <address className="not-italic">
                                    <a href="mailto:contact@elenavance.com">contact@elenavance.com</a>
                                </address>
                            </div>
                        </div>

                        <div className="footer-links flex flex-wrap">
                            <div className="index-head">
                                <p>INDEX</p>
                                <ul>
                                    <li>
                                        <a href="#About">About</a>
                                    </li>
                                    <li>
                                        <a href="#Practice-Areas">Practice Areas</a>
                                    </li>
                                    <li>
                                        <a href="#Experience">Experience</a>
                                    </li>
                                    <li>
                                        <Link href="/appointment">
                                            Appointment
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="social-head flex flex-col">
                                <p>CONNECT</p>
                                <ul className="">
                                    <li>
                                        <a href="https://github.com/mgulmak3333">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mgulmak3333">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mgulmak3333">
                                            Legal 500
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mgulmak3333">
                                            Chambers Global
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="foot-elena">
                        <p>ELENA VANCE</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <span>© 2026 ELENA VANCE. ALL RIGHTS RESERVED.</span>
                    <span>ELA & OZKAN</span>
                </div>
                
            </footer>
        </>
    )
}