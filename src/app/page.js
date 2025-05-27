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
          <h1 ref={h1Ref}> {/* Removed opacity: 0 from H1 */}
            Living Materials For A Regenerative Future
          </h1>
        </div>
        <div className="heroImage">
          <video autoPlay loop muted playsInline width="2000" height="500">
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

