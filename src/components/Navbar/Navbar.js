import React, { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
   const [showMediaIcons, setShowMediaIcons] = useState(false);
   return (
      <>
         <nav className="main_nav">
            {/* logo part  */}
            <div className="logo">
               <h2>
                  <span>T</span>hapa <span>T</span>echnical
               </h2>
            </div>

            {/* menu part  */}
            <div
               className={
                  showMediaIcons ? "menu_link mobile_menu_link" : "menu_link"
               }
            >
               <ul>
                  <li>
                     <a href="#home">Home</a>
                  </li>
                  <li>
                     <a href="#about">About</a>
                  </li>
                  <li>
                     <a href="#services">Services</a>
                  </li>
                  <li>
                     <a href="#contact">contact</a>
                  </li>
               </ul>
            </div>

            {/* social media link  */}
            <div className="social_media">
               <ul className="social_media_desktop">
                  <li>
                     <a href="https://www.facebook.com" target="_thapa">
                        <FaFacebookF className="facebook" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.youtube.com" target="_thapa">
                        <FaYoutube className="youtube" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com" target="_thapa">
                        <FaInstagram className="instagram" />
                     </a>
                  </li>
               </ul>
               <div className="hamburger_menu">
                  <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
                     <BiAlignRight />
                  </li>
               </div>
            </div>
         </nav>

         {/* body section  */}
         <section className="hero_section">
            <p>Welcome to</p>
            <h1>Thapa Technical</h1>
         </section>
      </>
   );
};

export default Navbar;
