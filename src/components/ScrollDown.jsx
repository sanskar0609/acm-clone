import React, { useState, useEffect } from 'react'

const ScrollDown = () => {
    const [showScrollDown, setShowScrollDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollDown(false);
            } else {
                setShowScrollDown(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`mb-4 transition-opacity duration-300 ${showScrollDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <a href="#upcomingEvents" className="flex items-center">
                <svg
                    className='w-[50px] h-[50px] md:w-[40px] md:h-[40px]'
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5"
                    }}
                >
                    <path
                        className="animate-scroll"
                        d="M123.359,79.775l0,72.843"
                        style={{
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "20px"
                        }}
                    ></path>
                    <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "20px"
                        }}
                    ></path>
                </svg>
            </a>
        </div>
    )
}

export default ScrollDown