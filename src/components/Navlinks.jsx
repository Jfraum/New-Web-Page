import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

export default function Navlinks (){
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Inversa el estado para mostrar y ocultar
    };

        return (
        <>
        {
            links.map((links) => (
                <div key={links.name}>

                    {/* Tablet + */}

                    <div className="px-3 flex flex-col items-center  md:cursor-pointer group" >
                        <Link to={links.src} className=" text-eacdc2 py-7 hover:opacity-50 duration-300" onClick={toggleVisibility}>{links.name}</Link>
                        {links.submenu && (
                        <div className=" flex justify-center relative z-10" tyle={{ display: isVisible ? 'block' : 'none' }}>
                            <div className=" absolute z-10 bg-1e1e1e bg-opacity-90 p-3 rounded-lg hidden group-hover:md:block hover:md:block">
                                <div>
                                {links.sublinks.map((mysublinks) => (

                                            <div className="justify-center md:masonry">

                                                {mysublinks.sublink.map((slink) =>(
                                                    <li className="text-eacdc2 flex flex-col items-center justify-center">
                                                        <Link to={slink.src} className="hover:text-orange-400 hover:opacity-50">{slink.name}</Link>
                                                    </li>
                                                ))}

                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    }
                    </div>

                    {/* Mobile Menu */}

                    <div className={` flex justify-center relative ${isVisible ? 'md:hidden' : 'hidden'}`}>
                    {links.submenu && (
                        <div className="absolute z-10 bg-1e1e1e rounded-lg group-hover:md:block hover:md:block duration-300" >
                            <div className="">
                                <div>
                                {links.sublinks.map((mysublinks) => (

                                            <div className=" h-full">

                                                {mysublinks.sublink.map((slink) =>(
                                                    <li className="flex flex-col items-center py-1">
                                                        <Link to={slink.src} className="text-eacdc2">{slink.name}</Link>
                                                    </li>
                                                ))}

                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    }
                    </div>


                </div>
            ))
        }
        </>
    )

}