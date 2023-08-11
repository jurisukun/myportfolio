import React from "react";
import Homepage from "@/components/Homepage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

function Home() {
  return (
    <div className="h-full w-full">
      <Homepage />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
}

export default Home;
