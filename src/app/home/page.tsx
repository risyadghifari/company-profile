"use client"; // Mark this file as a client-side component

import SunAnimate from "@/components/sunScrolling";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { Montserrat } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
import EventSlider from "@/components/eventCard";
import ScrollProgressBar from "@/components/scrollBarProgress";
import MovingCard from "@/components/movingCard";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  style: 'normal'
});

const luckiest = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [scrollX, setScrollX] = useState(0); // State to track horizontal scroll

  useEffect(() => {
    const SCROLL_SPEED_MOUSE = window.innerWidth < 768 ? 2 : 5; // Default scroll speed for mouse
    const SCROLL_SPEED_TOUCHPAD = 10; // Faster scroll speed for touchpad
    const SMOOTHING_FACTOR = 0.4;
  
    const handleScroll = (event: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (container) {
        // Detecting if it's a touchpad (deltaY is small)
        const isTouchpad = Math.abs(event.deltaY) < 100; // If deltaY is small, it's likely a touchpad
        const SCROLL_SPEED = isTouchpad ? SCROLL_SPEED_TOUCHPAD : SCROLL_SPEED_MOUSE;
  
        const newScrollLeft = container.scrollLeft + event.deltaY * SCROLL_SPEED;
        container.scrollLeft = container.scrollLeft + (newScrollLeft - container.scrollLeft) * SMOOTHING_FACTOR;
        setScrollX(container.scrollLeft); // Update scrollX value
        event.preventDefault();
      }
    };
  
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }
  
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsTouching(true);
      setStartX(event.touches[0].pageX); // Get the starting touch position
      setScrollLeft(container.scrollLeft); // Save the scroll position
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouching) return;

    const container = scrollContainerRef.current;
    if (container) {
      const touchDelta = startX - event.touches[0].pageX; // Calculate horizontal movement
      container.scrollLeft = scrollLeft + touchDelta; // Adjust scroll position based on touch
      setScrollX(container.scrollLeft); // Update scrollX value
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false); // Reset touch state
  };

  return (
    <div
      style={{
        height: "100vh",
        margin: 0,
        overflow: "hidden",
        padding: 0,
      }}
    >
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* First Slide */}
        <div
          className="bg-orange-600 flex items-center justify-center"
          style={{ flex: "0 0 100vw" }}
        >
          <div className="container mx-auto px-20 py-12 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className={`md:w-1/2 space-y-6`}>
              <h1 className={`${luckiest.className} text-3xl md:text-6xl font-extrabold text-gray-950 leading-tight`}>
                COZY OR CHEEKY? WE HAVE GOT JUST A THING
              </h1>
              <p className={`text-gray-950 text-1xl ${montserrat.className}`}>
                Protect your largest investment from unexpected events life may throw your way.
              </p>
             
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
              <SunAnimate scrollX={scrollX} /> {/* Pass scrollX to SunAnimate */}

              {/* Arrow Animation (Positioned to the right side of the image) */}
              <motion.div
                className="absolute right-8 bottom-12 transform"
                style={{
                  fontSize: "60px",
                  color: "black",
                }}
                animate={{
                  x: [0, 15, 0], // Arrow will move to the right and back
                }}
                transition={{
                  repeat: Infinity, // Repeat the animation forever
                  duration: 1, // Duration of one cycle of the animation
                  ease: "easeInOut", // Smooth easing
                }}
              >
                &rarr; {/* Right arrow symbol */}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div
          className="bg-orange-600 flex items-center justify-center"
          style={{ flex: "0 0 100vw" }}
        >
         
      {/* Adding margin top to prevent collision with the navbar */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <EventSlider />
      </div>

        </div>

      {/* Third Slide */}
<div
  className="bg-gray-950"
  style={{ flex: "0 0 100vw" }}
>
<MovingCard />

</div>


{/* TFooter */}
<div
  className="bg-orange-600 flex items-center justify-center"
  style={{
    flex: "0 0 20vw", // Adjust width to be smaller for the footer (20% of viewport width)
    height: "100vh", // Full height to match other slides
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Footer content */}
  <p className="text-white font-bold">Footer Content</p>
</div>



      </div>
      <ScrollProgressBar navbarHeight={0} navbarWidth={0} />
    </div>
  );
}
