import React from "react";
import Homepage from "@/components/Homepage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

function Home() {
  return (
    <div className="h-full w-full">
      <Homepage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Home;
