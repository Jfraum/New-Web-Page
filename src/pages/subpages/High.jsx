import React from "react";
import Nav from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"


const urlEndpoint = import.meta.env.VITE_REACT_APP_API_KEY;

export default function HighP () {
  
    return (
        <>

        <Nav />

           <h1 className=" text-[#FF4D4D] text-xl lg:text-2xl 2xl:text-5xl text-justify py-5 flex justify-center font-bold animate-underline">
                        High Value Density
                    </h1>

        <div className="pt-10 relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
            <iframe
                src="https://www.youtube.com/embed/yzVMgoir7tU"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-64 sm:h-96"
            ></iframe>
        </div>


     {/* texto */}
 <div className="flex flex-col px-2 py-5 md:items-center justify-center rounded-2xl md:box-content md:px-56">
                    <h2 className="text-[#eacdc2] text-sm lg:text-xl 2xl:text-xl font-light text-justify py-5">
                        Alex Hormozi reflects on his concept of a{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#FF4D4D]">
                            {"legacy play".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        explaining that his ultimate goal is to create a{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#FF8E8E]">
                            {"generational inflection point".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        that permanently transforms his{" "}
                        <span className="group inline-block cursor-default font-bold underline decoration-dotted underline-offset-4 text-[#E63946]">
                            {"family trajectory".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>.{" "}
                        Inspired by historic dynasties, he aims to be the catalyst for change within his lineage, believing that fulfilling this purpose represents a{" "}
                        <span className="group inline-block cursor-default font-bold text-[#FF5A5F]">
                            {"life well-lived".split("").map((char, i) => (
                                <span key={i} className="inline-block transition-transform duration-200 group-hover:-translate-y-2" style={{ transitionDelay: `${i * 30}ms` }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>{" "}
                        dedicated to being as positive and helpful as possible to the world.
                    </h2>
                </div>
        <Footer />
        </>
    )
}
