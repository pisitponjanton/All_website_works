"use client";

import { useRef, useState, useEffect } from "react";

export default function Water3() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.8 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-start relative h-[750px] max-[1385px]:h-[600px] max-[978px]:h-[300px] max-[700px]:h-[120px]">
      <div
        className="relative z-[1] max-[1385px]:scale-[0.7] max-[1385px]:left-[-195px] max-[1385px]:top-[-70px]
       max-[978px]:scale-[0.5] max-[978px]:left-[-325px] max-[978px]:top-[-180px]
       max-[700px]:scale-[0.25] max-[700px]:left-[-485px] max-[700px]:top-[-120px]"
        ref={elementRef}
      >
        <div className="relative w-[1290px] h-[700px] bg-bg3-2 bg-cover bg-center bg-no-repeat">
          <div
            className={`absolute ${
              isVisible ? "" : "translate-y-[-600px] translate-x-[-2000px]"
            } duration-[0.7s] ease-in-out `}
          >
            <div className="absolute top-[-50px] left-[910px] w-[650px] h-[700px] bg-cherry1 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
          </div>
          <div className="z-[-1] absolute top-[-190px] right-[340px] bg-w31 bg-cover bg-center bg-no-repeat w-[330px] h-[300px] animate-left-right2"></div>
          <div className="absolute top-[-100px] right-[140px] w-[350px] h-[275px] bg-cherry3 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
          <div
            className={`absolute top-[155px] left-[115px] bg-sleep bg-cover bg-center bg-no-repeat w-[100px] h-[100px] ${
              isVisible ? "scale-1 animate-move-up" : "scale-0"
            }`}
          ></div>
          <div
            className={`absolute top-[360px] left-[105px] bg-humanhead bg-cover bg-center bg-no-repeat w-[110px] h-[110px] duration-700 ease-in-out ${
              isVisible ? "animate-move-up" : "scale-0"
            }`}
          ></div>
          <div className="relative top-[170px] left-[140px] text-[#FFD6F6] text-[35px] font-inter-bold flex flex-col justify-center items-center">
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
          <div className="relative top-[150px] left-[80px] text-[#FF8AFD] text-[60px] font-inter-bold flex justify-center items-center">
            <div className="bg-cw3 relative top-[-50px] right-[-80px] bg-cover bg-center bg-no-repeat w-[200px] h-[220px] animate-left-right"></div>
            <div>Cherry Freshes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
