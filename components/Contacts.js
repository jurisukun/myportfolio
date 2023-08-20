"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { sharyfont } from "./AboutMe";
import { nuerosmall } from "./AboutMe";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.trim() === "" ||
      e.target[1].value.trim() === "" ||
      e.target[2].value.trim() === ""
    ) {
      alert("Please fill up all the fields");
      return;
    }

    emailjs
      .sendForm(
        "service_wjpz69t",
        "template_qgz1sxq",
        form.current,
        "bQdUaIUqY-3kGVY3F"
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly");
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send email, Please try again");
        }
      );
  };

  return (
    <div
      id="contacts"
      className="aboutme p-8 min-h-[100vh] flex flex-col justify-center w-full"
    >
      <div className="">
        <h1
          className={`${sharyfont.className} font-extrabold text-center text-3xl sm:text-4xl text-white mb-10 drop-shadow-2xl `}
        >
          Contacts
        </h1>
      </div>

      <div className=" flex flex-col w-full border-2 rounded-lg  sm:flex-row p-3 sm:h-[450px] h-auto gap-3">
        <div className="sm:w-[40%] w-full h-[300px]  sm:h-full border-yellow-400 border-2 rounded-xl overflow-hidden">
          <div className="h-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123794.52499363774!2d120.67036990984244!3d14.160836646788587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd84c416c13e8b%3A0xf7a5caff1f064344!2sMagallanes%2C%20Cavite!5e0!3m2!1sen!2sph!4v1691754203293!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col sm:w-[60%] w-full sm:h-full h-[350px] items-center justify-center border-2 gap-8  rounded-xl ">
          <div>
            <h3 className={`${nuerosmall.className} text-yellow-400`}>
              Send me a message
            </h3>
          </div>

          <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
            <div className="flex flex-col gap-3">
              <div className="message">
                <label htmlFor="name" className="text-white font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-1 rounded-sm"
                  name="from_name"
                  required
                  id="name"
                />
              </div>
              <div className="message">
                <label htmlFor="name" className="text-white font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-1 rounded-sm"
                  name="from_email"
                  required
                  id="from_email"
                />
              </div>
              <div className="message">
                <label htmlFor="name" className="text-white font-semibold">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  className="p-1 rounded-sm sm:max-h-[100px]"
                  name="message"
                  required
                  id="message"
                />
              </div>
              <div className="w-full flex justify-center mt-3">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold rounded-sm p-1 w-[100px] hover:bg-slate-100 hover:text-yellow-400 hover:border-yellow-400 "
                  required
                  onClick={() => {
                    console.log(form.current);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
