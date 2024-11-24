"use client";

import { useRef, useState, useEffect } from "react";

export default function Water2() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className="w-full relative h-[850px]">
      <div className="relative flex justify-end z-[1]" ref={elementRef}>
        <div className="bg-bg2-2 bg-cover bg-center bg-no-repeat w-[1290px] h-[700px] relative">
          <div className="absolute top-[-175px] right-[220px] bg-ww22 bg-center bg-cover bg-no-repeat w-[210px] h-[260px] z-[-10] animate-up-down"></div>
          <div className="absolute top-[530px] left-[-100px] bg-ww23 bg-center bg-cover bg-no-repeat w-[270px] h-[270px] z-[-10] animate-up-down"></div>
          <div className={`absolute top-[165px] right-[65px] bg-h1 bg-cover bg-center bg-no-repeat w-[100px] h-[100px] ${isVisible ? "scale-1 animate-move-up": "scale-0"}`}></div>
          <div className={`absolute top-[370px] right-[68px] bg-woman bg-cover bg-center bg-no-repeat w-[100px] h-[101px] ${isVisible ? "scale animate-move-up": "scale-0"}`}></div>
          <div
            className={`absolute 
            ${
              isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-[2000px] translate-y-[-600px] opacity-0"
            }
            duration-700 ease-in-out`}
          >
            <div className="absolute top-[-150px] left-[-250px] bg-green2 bg-cover bg-center w-[750px] h-[900px] animate-left-right2"></div>
          </div>
          <div className="relative top-[170px] left-[-90px] text-[#DBFFF6] text-[35px] font-inter-bold flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-[400px]">
              <div>Fat 0 g.</div>
              <div>0%</div>
            </div>
            <div className="w-[400px]">Protein 0 g.</div>
            <div className="flex justify-between items-center w-[400px]">
              <div>Carbohydrate 24 g.</div>
              <div>8%</div>
            </div>
            <div className="relative right-[67px]">Sugar 24 g.</div>
            <div className="flex justify-between items-center w-[400px]">
              <div>Sodium 210 mg.</div>
              <div>11%</div>
            </div>
          </div>
          <div className="relative top-[200px] left-[352px] text-[#70F6D6] text-[60px] font-inter-bold">
            Green Apple Freshes
          </div>
        </div>
      </div>
    </div>
  );
}
