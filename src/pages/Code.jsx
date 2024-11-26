import React from "react";
import 'animate.css';

import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { IKImage } from "imagekitio-react";

const urlEndpoint = 'https://ik.imagekit.io/f10c3to17';

export default function HomeC () {

   
    return (
        <> 


            <Nav />
                <header className="flex justify-center text-xl font-bold text-eacdc2">
                    <h1>
                        Aquí podrás revisar todos mis proyectos.
                    </h1>
                </header>
                <section className="flex flex-grow justify-center mt-10">
                    <div className=" w-[320px] h-[350px] shadow-2xl hover:shadow-eacdc2 duration-300 bg-1e1e1e rounded-2xl flex flex-col pt-1 items-center">
                    
                        <IKImage urlEndpoint={urlEndpoint}
                    path="/Logo/Screenshot%20from%202024-11-23%2016-07-31.png?updatedAt=1732392549501"
                    className=" flex justify-center w-[300px] h-[200] rounded-2xl mt-5 shadow-2xl"/>


                        <h1 className="text-eacdc2 font-bold text-center mt-5 ">
                            Picma es un buscador de imagenes, potenciado con la API de Unsplash, en el que podrás buscar cualquier imagen que te guste. 
                        </h1>

                    
                        <div className="bg-eacdc2 hover:bg-1e1e1e rounded-lg w-40  mt-5 duration-500 ">     
                            <a className="flex justify-center font-bold text-1e1e1e text-center text-2xl  hover:text-eacdc2 duration-500"
                            href="https://picma.vercel.app/">
                                observar
                            </a>
                        </div>

                    

                    </div>
                </section>
            <Footer />

        </>
    )
}