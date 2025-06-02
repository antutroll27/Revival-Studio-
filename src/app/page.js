'use client';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import revealerAnimation from "@/hooks/revealerAnimation";

export default function Home() {
  const h1Ref = useRef(null);

  revealerAnimation(); // Assuming this is for a general page reveal

  useEffect(() => {
    if (h1Ref.current) {
      const text = h1Ref.current.textContent;
      const words = text.split(" ");

      h1Ref.current.innerHTML = words
        .map(
          (word) =>
            // Ensure inner spans start with opacity 0 and translated down
            `<span style="display: inline-block; overflow: hidden;"><span style="display: inline-block; transform: translateY(100%); opacity: 0;">${word}</span></span>`
        )
        .join(" ");

      const wordSpans = h1Ref.current.querySelectorAll("span > span");

      // Animate spans to y: 0% and opacity: 1
      gsap.to(wordSpans, {
        y: "0%",
        opacity: 1,
        stagger: 0.15, // Slightly reduced stagger
        duration: 2,    // Kept user's duration
        ease: "expo.out", // Changed ease for smoother deceleration
        delay: 0.8,    // Kept user's delay
      });
    }
  }, []);

  return (
    <>
      <div className="revealer"></div>
      <div className="home">
        <div className="header">
          <h1 ref={h1Ref} style={{ whiteSpace: 'nowrap' }}>Revival</h1>
          <div className="header-content-wrapper">
            <a href="/work" className="cta-link">
              <span>Our Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="header-description">
              <h3  >Living Materials for a Regenerative Future.Growing bio-crafted solutions that go beyond form, we weave regenerative systems.</h3>
              
            </div>
          </div>
        </div>
           
        <div className="heroImage-container">
          <div className="heroImage heroImage-left">
            <video autoPlay loop muted playsInline width="2000" height="500">
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="heroImage heroImage-right">
            <video autoPlay loop muted playsInline width="2000" height="500">
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

