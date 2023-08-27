import { useState } from "react";
import { navLinks } from "../constants";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Nav({ whenChange }) {
    const [change, setChange] = useState('0')
    function changing(index) {
        setChange(index)
        whenChange(index)
    }

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div></div>
            <nav ref={navRef} className=" max-w-full h-[50px] m-[5px] flex p-2 plex text-[14px]">

                {navLinks.map((items, index) => {
                    return (
                        <a
                            key={index}
                            className=" text-[#f6bd2e] font-semibold focus:text-[#efd182] mx-4 px-3  hover:text-[#efd182]"
                            onClick={() => {
                                changing(index)
                            }}
                            href={items.href}>
                            <span className="focus:border-b-2 focus:border-[#f6bd2e]  hover:border-b-2 border-b-2 border-[#000] hover:border-[#f6bd2e]"> {items.label}</span>
                        </a>
                    )
                })}

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn nav-btn-open"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}
