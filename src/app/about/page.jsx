
'use client'
import Image from "next/image";
import React from "react";
import revealerAnimation from "@/hooks/revealerAnimation";

export default function About() {
    revealerAnimation();
    return (

        <>
        <div className="revealer"></div>
        <div className="about">
            <div className="col">
                <h2 className="story-heading">Our Story</h2>
            </div>
            <div className="col">
                <h2>At Revival Studio, we treat materials as living canvases for a regenerative tomorrow.
                    Fueled by rigorous research and a flair for biomorphic design, our scientists, designers and
                    storytellers transform algae, mycelium and other bio-matter into high-performance solutions that
                    spark industry-wide change. Today, we partner with visionary organisations across the globe to revive
                    the way we make, build and imagine.
                </h2>
                <div className="aboutImage">
                    <Image src="/hero.jpg" alt="Hero" width={2000} height={1000} />
                </div>
            </div>
            
        </div>
        </>
    );
}
