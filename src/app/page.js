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
        <Image src="/hero.jpg" alt="Hero" width={2000} height={1000} />
      </div>
    </div>
    </>
  );
}
