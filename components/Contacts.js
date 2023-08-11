"use client";
import React from "react";
import { sharyfont } from "./AboutMe";
import { nuerosmall } from "./AboutMe";
function Contacts() {
  return (
    <div className="aboutme p-8 min-h-[500px] flex flex-col ">
      <div className="">
        <h1
          className={`${sharyfont.className} font-extrabold text-center text-3xl sm:text-4xl text-white mb-10 drop-shadow-2xl `}
        >
          Contacts
        </h1>
      </div>
      <div className=" flex border-2 rounded-lg sm:flex-row p-3 h-[450px] gap-3">
        <div className="w-1/2 border-yellow-400 border-2 rounded-xl overflow-hidden">
          <div className="h-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123794.52499363774!2d120.67036990984244!3d14.160836646788587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd84c416c13e8b%3A0xf7a5caff1f064344!2sMagallanes%2C%20Cavite!5e0!3m2!1sen!2sph!4v1691754203293!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col w-1/2 items-center justify-center border-2 gap-8  rounded-xl ">
          <div>
            <h3 className={`${nuerosmall.className} text-yellow-400`}>
              Kindly send me message
            </h3>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="flex flex-col w-1/4 items-start justify-start gap-10 ">
                <label for="name" className="text-white font-semibold">
                  Name
                </label>
                <label for="name" className="text-white font-semibold">
                  Email
                </label>
                <label for="name" className="text-white font-semibold">
                  Message
                </label>
              </div>
              <div className="flex flex-col w-3/4 gap-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-1 rounded-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-1 rounded-sm"
                />
                <textarea
                  placeholder="Message"
                  className="p-1 rounded-sm max-h-[100px]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
