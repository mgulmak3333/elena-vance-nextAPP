import Image from 'next/image';

import './Main.css';


export default function Main(){
    return(
        <>
            <main className="bg py-5 px-[50px] pb-10">
                <Image src="/images/removebg.webp" priority width={1920} height={1080} className="mask-img" alt="mask" />
                <div className="font-area">
                    <div className="font">
                        <div className="ft1">
                            Elena 
                        </div>
                        <div className="ft2">
                            Vance
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}