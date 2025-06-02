'use client'
import React from "react";
import revealerAnimation from "@/hooks/revealerAnimation";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const contact = () => {
    revealerAnimation();
    const h2Ref = useRef(null);

    useEffect(() => {
        if (h2Ref.current) {
            const text = h2Ref.current.textContent;
            const words = text.split(" ");

            h2Ref.current.innerHTML = words
                .map(
                    (word) =>
                        `<span style="display: inline-block; overflow: hidden;"><span style="display: inline-block; transform: translateY(100%); opacity: 0;">${word}</span></span>`
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
            <div className="contact">
                <div className="col">
                    <h2 ref={h2Ref}>Send us a message</h2>
                </div>

                <div className="col">
                    <div className="contacts">
                        <h2>Collaborations</h2>
                        <h2>studio@revivalstudio.com</h2>
                    </div>

                    <div className="contacts-redux">
                        <h2>General Inquiries</h2>
                        <h2>support@revivalstudio.com</h2>
                    </div>
                 
                    <div className="SocialMedia"> 
                        <p>Linkedin</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>X.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default contact; 