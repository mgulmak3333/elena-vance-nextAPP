import Link from 'next/link';

import './Counsel.css';

export default function Counsel(){
    return(
        <>
            <section className="counsel flex items-center justify-center">
                <div className="counsel-area flex flex-col items-center text-center gap-1">
                    <h2>INITIATE STRATEGIC COUNSEL</h2>
                    <p>Ready to discuss complex international litigation, corporate strategy, or secure discreet advice for C-suite executive engagements? Our methodology is defined by uncompromised precision and cross-border expertise.</p>
                    <Link href="/appointment">
                        <button>SCHEDULE CONFIDENTIAL CONSULTATION</button>
                    </Link>
                </div> 
            </section>
        </>
    )
}