"use client";
import Homepage from "@/components/Homepage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Nav from "@/components/Nav";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import { useState } from "react";
import Loading from "./loading";

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  setTimeout(() => {
    setShowSplash(false);
  }, 4000);

  return (
    <div className="aboutme relative flex flex-col jusitfy-center items-center">
      {showSplash ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Homepage />
          <AboutMe />
          <Projects />
          <Contacts />
          <Footer />
          <FloatingNav />
        </>
      )}
    </div>
  );
}

export default Home;
