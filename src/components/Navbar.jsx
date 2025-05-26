// components/Navbar.js
'use client'
console.log("--- NAVBAR COMPONENT SCRIPT LOADED ---"); // For load verification

import React from 'react';
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions'; 
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
    console.log("Navbar: Component rendering/re-rendering.");
    const router = useTransitionRouter(); 
    const pathname = usePathname();

    // Defines the custom animation for the View Transition
    function triggerTransition() {
        console.log("Navbar: triggerTransition called - Attempting CIRCULAR clipPath animation."); 

        if (!document.documentElement) {
            console.error("Navbar: document.documentElement not found in triggerTransition.");
            return;
        }

        const revealerElement = document.querySelector('.revealer');
        let originalDisplay = '';

        if (revealerElement) {
            console.log("Navbar: Found .revealer element, temporarily hiding it for View Transition.");
            originalDisplay = revealerElement.style.display;
            revealerElement.style.display = 'none';
        } else {
            console.log("Navbar: .revealer element NOT found during triggerTransition.");
        }

        // --- CIRCULAR CLIPPATH ANIMATION ---
        const animation = document.documentElement.animate([
            { 
                clipPath: 'circle(0% at 50% 50%)' // Start as a tiny circle in the center
            },
            { 
                clipPath: 'circle(150% at 50% 50%)' // Expand to cover viewport
            }
         ], {
            duration: 700, 
            easing: 'ease-in-out', 
            pseudoElement: '::view-transition-new(root)', 
         });

         if (animation) {
            console.log("Navbar: WAAPI (circular clipPath) animation object created.", animation);
            animation.onfinish = () => {
                console.log("Navbar: CIRCULAR View Transition animation FINISHED.");
                if (revealerElement) {
                    console.log("Navbar: Restoring .revealer display after circular animation.");
                    revealerElement.style.display = originalDisplay; 
                }
            };
            animation.oncancel = () => {
                console.log("Navbar: CIRCULAR View Transition animation CANCELED.");
                 if (revealerElement) {
                    revealerElement.style.display = originalDisplay;
                }
            };
         } else {
            console.error("Navbar: Failed to create WAAPI (circular clipPath) animation object.");
             if (revealerElement) {
                revealerElement.style.display = originalDisplay;
            }
         }
    }

    const handleNavigation = (path) => (e) => {
        console.log(`Navbar: handleNavigation called for path: ${path}. Current pathname: ${pathname}`);
        if (path === pathname) {
            console.log("Navbar: Path is current page, preventing navigation.");
            e.preventDefault(); 
            return;
        }
        e.preventDefault(); 

        console.log(`Navbar: Navigating to ${path}, preparing to call router.push with onTransitionReady.`);
        router.push(path, {
            onTransitionReady: () => {
                console.log("Navbar: onTransitionReady callback executed. Now calling triggerTransition.");
                triggerTransition();
            },
        });
    }

  return (
      <div className='navbar'>
          <div className='col'>
              <div className='logo'>
                  <Link href='/'>Revival Studio.</Link>
              </div>
          </div>

          <div className='col'>
              <div className='navigation-items'>
                  <div className='nav-item'>
                      <Link href='/' onClick={handleNavigation('/')}>Home</Link>
                  </div>
                  <div className='nav-item'>
                      <Link href='/about' onClick={handleNavigation('/about')}>About</Link>
                  </div>
                  <div className='nav-item'>
                      <Link href='/work' onClick={handleNavigation('/work')}> Work</Link>
                  </div>
                  <div className='nav-item'>
                      <Link href='/contact' onClick={handleNavigation('/contact')}>Contact</Link>
                  </div>
              </div>
          
              <div className='nav-end'>
                <p>Kolkata , IND</p>
              </div>
          </div>
        </div>
  );
}

export default Navbar;