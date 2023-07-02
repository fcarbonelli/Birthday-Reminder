import * as React from "react";
import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Landing() {
    return (
        <section >
            <div class=" flex justify-center items-end">
                <Hero/>
                
            </div>
            <Features/>
            <CTA/>
            <Footer/>

            
            <div class="circle rounded-full flex justify-center items-end pb-10"></div>
            <div class="circle-2 rounded-full flex justify-center items-end pb-10"></div>
        </section>
    
    
    
    )
}