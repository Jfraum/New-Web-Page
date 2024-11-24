import React from "react";

import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe () {
    
    return (
        <> 

            <Nav />
                <div className="">
                <div className="flex flex-col md:flex-row px-2 py-5 md:items-center shadow-2xl rounded-2xl md:box-content md:px-56">
                    <div className=" flex flex-col text-eacdc2 text-justify px-5">
                        <h1 className="text-eacdc2 text-sm lg:text-2xl 2xl:text-3xl font-bold hover:tracking-wide duration-700 text-justify py-2">
                            I'm Fraum
                        </h1>
                        <p className="text-eacdc2 text-sm lg:text-2xl 2xl:text-3xl font-light  py-5">
                        My real name is Juan Augusto but artistically I like to be called Fraum. I first started with photography while I was studying cinematographic arts at the UCV and since then I have been published in fashion and art magazines throughout the world.
                        </p>
                        <p className="text-eacdc2 text-sm lg:text-2xl 2xl:text-3xl font-light  py-5">
                        At school I was curious to study mathematics and physics but I did not opt for any career that entails this but instead I opted for the arts, to eventually re-enter that world of mathematics but from the vision of programming.
                        </p>
                        <p className="text-eacdc2 text-sm lg:text-2xl 2xl:text-3xl font-light py-5">
                        Since then, I have been studying programming starting with HTML, CSS and JavaScript to ending with React.Js and Tailwind CSS.
                        </p>

                    </div>
                    <div className="flex ">
                        <img src="/Juan profile.jpg" className=""></img>
                    </div>
                </div>
                </div>

            <Footer />


        
        </>
    )
}