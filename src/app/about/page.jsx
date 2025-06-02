
'use client'
import Image from "next/image";
import React from "react";
import revealerAnimation from "@/hooks/revealerAnimation";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function About() {
    revealerAnimation();
    const h2Ref = useRef(null);

    useEffect(() => {
        if (h2Ref.current) {
            const text = h2Ref.current.textContent;
            const words = text.split(" ");

            h2Ref.current.innerHTML = words
                .map(
                    (word) =>
                        `<span style=\"display: inline-block; overflow: hidden;\"><span style=\"display: inline-block; transform: translateY(100%); opacity: 0;\">${word}</span></span>`
                )
                .join(" ");

            const wordSpans = h2Ref.current.querySelectorAll("span > span");

            gsap.to(wordSpans, {
                y: "0%",
                opacity: 1,
                stagger: 0.15,
                duration: 2,
                ease: "expo.out",
                delay: 0.8,
            });
        }
    }, []);

    return (

        <>
        <div className="revealer"></div>
        <div className="about-row">
            <div className="about-col about-title">
                <h2 className="story-heading" ref={h2Ref}>OUR STORY</h2>
            </div>
            <div className="about-col about-desc">
                <h2>
                    At Revival Studio, we treat materials as living canvases for a regenerative tomorrow. Fueled by rigorous research and a flair for biomorphic design, our scientists, designers and storytellers transform algae, mycelium and other bio-matter into high-performance solutions that spark industry-wide change. Today, we partner with visionary organisations across the globe to revive the way we make, build and imagine.
                </h2>
            </div>
        </div>
    </>
    );
}
