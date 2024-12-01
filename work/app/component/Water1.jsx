"use client";

import { useRef, useState, useEffect } from "react";

export default function Water1() {
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
    <div className="w-full relative flex justify-start items-start">
      <div
        className="h-[1000px] max-[1385px]:h-[550px] max-[978px]:h-[400px] max-[700px]:h-[150px] relative max-[1385px]:scale-[0.7] max-[1385px]:left-[-195px] max-[1385px]:top-[-150px]
      max-[978px]:scale-[0.5] max-[978px]:left-[-325px] max-[978px]:top-[-210px]
      max-[700px]:scale-[0.25] max-[700px]:left-[-485px]"
      >
        <div className="absolute top-[-182px] left-[-100px] bg-star2 bg-cover bg-center bg-no-repeat w-[600px] h-[500px] z-[5] animate-up-down">
          <div className="absolute top-[200px] right-[-275px] bg-text bg-cover bg-center bg-no-repeat w-[600px] h-[140px]"></div>
        </div>
        <div className="relative top-[170px] z-[1] " ref={elementRef}>
          <div className="relative w-[1290px] h-[700px] bg-bg1-2 bg-cover bg-center bg-no-repeat">
            <div className="absolute top-[-180px] z-[-1] right-[330px] bg-w1 bg-center bg-cover bg-no-repeat w-[200px] h-[250px] animate-left-right2"></div>
            <div className="absolute top-[-180px] right-[70px] bg-b2b bg-center bg-cover bg-no-repeat w-[350px] h-[350px] animate-left-right2"></div>
            <div
              className={`absolute ${
                isVisible ? "" : "translate-y-[-600px] translate-x-[-2000px]"
              } duration-[0.7s] ease-in-out `}
            >
              <div className="absolute top-[-100px] left-[910px] w-[700px] h-[850px] bg-blue3 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div
              className={`absolute top-[155px] left-[130px] bg-seed bg-cover bg-center bg-no-repeat w-[120px] h-[120px] ${
                isVisible ? "scale-1 animate-move-up" : "scale-0"
              }`}
            ></div>
            <div
              className={`absolute top-[360px] left-[130px] bg-human bg-cover bg-center bg-no-repeat w-[110px] h-[110px] duration-700 ease-in-out ${
                isVisible ? "scale-1 animate-humann" : "scale-0"
              }`}
            ></div>
            <div className="relative top-[170px] left-[140px] text-[#E0F5FF] text-[35px] font-inter-bold flex flex-col justify-center items-center">
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
            <div className="relative top-[200px] left-[475px] text-[#8BDBFF] text-[60px] font-inter-bold">
              Blueberry Freshes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
