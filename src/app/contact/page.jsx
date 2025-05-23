'use client'
import React from "react";
import revealerAnimation from "@/hooks/revealerAnimation";

const contact = () => {
    revealerAnimation();
    return (
        <>
            <div className="revealer"></div>
            <div className="contact">
                <div className="col">
                    <h2>Send us a message</h2>
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