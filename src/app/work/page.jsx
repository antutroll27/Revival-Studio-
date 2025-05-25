'use client'
import React from 'react';
import revealerAnimation from "@/hooks/revealerAnimation";

const Work = () => {

    revealerAnimation();
    return (
    <>
        <div className="revealer"></div>
        <div className="work">
            <h1 className='work-heading'>Our Work</h1>
            <div className="Projects">
                <img src="hero.jpg" alt="hero" />
                <img src="hero.jpg" alt="hero" />
                <img src="hero.jpg" alt="hero" />
                <img src="hero.jpg" alt="hero" />
                
            </div>
        </div>
        </>
    );
}

export default Work;
