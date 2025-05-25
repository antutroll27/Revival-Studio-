'use client'
import Image from "next/image";
import revealerAnimation from "@/hooks/revealerAnimation";

export default function Home() {
  
  revealerAnimation();

  return (
    
    <>
    <div className="revealer"></div>
    <div className="home">
      <div className="header">
        <h1>Revival Studio.</h1>
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
