import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center py-4 px-3">
        <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg px-4 py-6 gap gap-10 md:gap-32">
          <div className="flex flex-col text-eacdc2 text-justify max-w-prose space-y-4">
            <h1 className="text-eacdc2 text-lg font-bold hover:tracking-wide duration-500 text-center">
                    I'm Fraum
                  </h1>

                  <p className="text-eacdc2 text-base font-light mb-4">
                    I am a cinematography and video editing student at the Central University of Venezuela, where I have developed a deep technical foundation in the Adobe Creative Suite. My expertise is centered on{" "}
                    <span className="text-008698 font-semibold animate-underline">
                      After Effects
                    </span>{" "}
                    and{" "}
                    <span className="text-F39C9C font-semibold animate-underline">
                      Motion Graphics
                    </span>
                    , a passion that began through self-taught exploration and has evolved into a professional specialty. Currently, I apply these skills at{" "}
                    <span className="text-E0FFFB font-bold animate-underline">
                      LOUD Digitals in Costa Rica
                    </span>
                    , contributing to high-level digital projects and dynamic visual content.
                  </p>

                  <p className="text-eacdc2 text-base font-light mb-4">
                    My professional background includes a significant role at{" "}
                    <span className="text-F39C9C font-bold animate-underline">
                      Sigma Real Estate
                    </span>
                    , where I worked directly on building a cohesive visual identity. This experience taught me to merge design, animation, and narrative to communicate brand values effectively. By combining my current work at{" "}
                    <span className="text-29CDB5 font-semibold animate-underline">
                      LOUD Digitals
                    </span>{" "}
                    with my previous marketing experience, I have developed a versatile approach to{" "}
                    <span className="text-29CDB5 font-semibold animate-underline">
                      visual storytelling
                    </span>{" "}
                    that resonates across international markets.
                  </p>

                  <p className="text-eacdc2 text-base font-light">
                    Looking toward the future, I am expanding my toolkit into the world of{" "}
                    <span className="text-teal-400 font-semibold animate-underline">
                      programming
                    </span>
                    . I view coding as a vital skill to diversify my capabilities, allowing me to transition from static content to{" "}
                    <span className="text-ADBC9F font-semibold animate-underline">
                      interactive web
                    </span>{" "}
                    and multimedia projects. I am a{" "}
                    <span className="text-ADBC9F font-semibold animate-underline">
                      committed creator
                    </span>{" "}
                    in constant evolution, always seeking new opportunities to bring innovative ideas to life through the power of moving images.
                  </p>
          </div>
          <div className="">
            <img
              src="/Juan profile.jpg"
              className="rounded-lg shadow-md w-32 md:w-48"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
