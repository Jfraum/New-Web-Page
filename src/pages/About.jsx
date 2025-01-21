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
            <p className="text-eacdc2 text-base font-light">
              My name is{" "}
              <span className="text-E0FFFB font-bold animate-underline">
                Juan Fraudita Macia
              </span>
              , and I am a student at the School of Arts at the Central University of Venezuela, specializing in{" "}
              <span className="text-29CDB5 font-semibold animate-underline">
                cinematography
              </span>
              ,{" "}
              <span className="text-29CDB5 font-semibold animate-underline">
                photography
              </span>
              , and{" "}
              <span className="text-29CDB5 font-semibold animate-underline">
                video editing
              </span>
              . My passion for audiovisual creation has driven me to develop advanced skills in Adobe tools such as{" "}
              <span className="text-008698 font-semibold animate-underline">
                After Effects
              </span>
              ,{" "}
              <span className="text-008698 font-semibold animate-underline">
                Premiere Pro
              </span>
              ,{" "}
              <span className="text-008698 font-semibold animate-underline">
                Photoshop
              </span>
              , and{" "}
              <span className="text-008698 font-semibold animate-underline">
                Illustrator
              </span>
              .
            </p>
            <p className="text-eacdc2 text-base font-light">
              My interest in{" "}
              <span className="text-F39C9C font-semibold animate-underline">
                motion graphics
              </span>{" "}
              began as a self-taught enthusiast and deepened through academic projects and professional experiences. At{" "}
              <span className="text-F39C9C font-bold animate-underline">
                Sigma Real Estate
              </span>
              , I contributed to building the company’s visual identity.
            </p>
            <p className="text-eacdc2 text-base font-light">
              I am also exploring{" "}
              <span className="text-teal-400 font-semibold animate-underline">
                programming
              </span>{" "}
              to enhance my capabilities in creating interactive multimedia projects, complementing my vision as a{" "}
              <span className="text-F39C9C font-semibold animate-underline">
                motion designer
              </span>
              . I am a{" "}
              <span className="text-ADBC9F font-semibold animate-underline">
                creative
              </span>{" "}
              and{" "}
              <span className="text-ADBC9F font-semibold animate-underline">
                proactive
              </span>{" "}
              individual eager to innovate and deliver compelling visual narratives.
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
