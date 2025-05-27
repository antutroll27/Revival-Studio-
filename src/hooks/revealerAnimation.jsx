'use client'

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";


gsap.registerPlugin(CustomEase);

CustomEase.create("hop", "0.9,0,0.1,1");

export default function revealerAnimation() {
    
    useGSAP(() => {
        gsap.to('.revealer', {
            scaleY: 0,
            duration: 1.3,
            delay: 0.3,
            ease: "expo.inOut",
            force3D: true,
            overwrite: true
        });
    });
}