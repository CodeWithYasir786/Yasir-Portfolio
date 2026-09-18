import { useState } from "react";

import img from "./code.png";
import Conversation from "./Conversation";
import Yasir from "./Yasir.png";
// import RadioGroupRating from "./RadioGroupRating";
const socialIcons = [
  {
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/+923138943221",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    link: "YOUR_LINKEDIN_URL",
  },
  {
    icon: "fa-solid fa-inbox",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=yasir.mughal07000@gmail.com",
  },
  {
    icon: "fa-brands fa-facebook-f",
    link: "YOUR_FACEBOOK_URL",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "YOUR_INSTAGRAM_URL",
  },
];

function Footer({ onContact }) {
  return (
    <div className="relative">
      <div className="relative z-10 translate-y-1/2 flex justify-center px-4">
        <Conversation onContact={onContact} />
      </div>

      <div className="bg-[#6e07f3] text-[#dfc8fc] text-center flex justify-center items-center flex-col mt-16 sm:mt-8 md:mt-0 pt-24 pb-16 px-4">
        {/* Profile Image */}
        {/* 
        <img
          src={Yasir}
          alt="Yasir Mustafa"
          className="pl-0 w-30 h-35 rounded-full"
        />
        */}

        <img src={img} alt="Yasir Mustafa logo" className="pl-0 w-10" />

        <h2 className="my-4">
          Living, learning, & leveling <br /> up one day at a time.
        </h2>

        <div className="images flex flex-row justify-center items-center">
          {socialIcons.map(({ icon, link }) => (
            <a
              key={icon}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon}
              className="group border-2 rounded-full border-[#dec7fc] p-2 flex justify-center items-center mr-4 hover:bg-white transition-all duration-300 ease-in-out"
            >
              <i
                className={`${icon} text-2xl text-[#dec7fc] group-hover:text-[#6e07f3] transition-all duration-300 ease-in-out`}
              ></i>
            </a>
          ))}
        </div>
      
        <p className="mt-4 text-base">Handcrafted by &copy; Yasir Mustafa</p>
      </div>
    </div>
  );
}

export default Footer;

{/*for rating on portfolio <div class="flex items-center justify-between gap-4 bg-white">
          <div class="flex" id="raty-with-score"></div>
          <div
            class="border-base-content/25 rounded-field text-base-content flex size-8 items-center justify-center border border-2 font-semibold"
            id="raty-score"
          ></div>
        </div> */}
