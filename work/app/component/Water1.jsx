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
    <div className="w-full flex justify-start h-[1000px] relative max-[1385px]:h-[700px] max-[900px]:h-[400px] max-[590px]:h-[300px] max-[590px]:scale-[0.8] max-[590px]:left-[-60px] max-[590px]:top-[-50px] max-[460px]:scale-[0.54] max-[460px]:left-[-75px] max-[460px]:top-[-120px]">
      <div className="absolute top-[-182px] max-[1385px]:top-[-200px] left-[-100px] max-[1385px]:left-[-70px] max-[900px]:left-[-50px] bg-star2 bg-cover bg-center bg-no-repeat w-[600px] max-[1385px]:w-[350px] max-[900px]:w-[250px] h-[500px] max-[1385px]:h-[300px] max-[900px]:h-[200px] z-[5] animate-up-down">
        <div className="absolute top-[200px] max-[1385px]:top-[125px] max-[900px]:top-[90px] right-[-275px] max-[1385px]:right-[-160px] max-[900px]:right-[-70px] bg-text bg-cover bg-center bg-no-repeat w-[600px] h-[140px] max-[1385px]:w-[350px] max-[900px]:w-[200px] max-[1385px]:h-[81px] max-[900px]:h-[47px]"></div>
      </div>
      <div
        className="relative top-[170px] max-[1385px]:top-[0px] flex flex-col justify-start max-[900px]:top-[-50px] z-[1] "
        ref={elementRef}
      >
        <div className="relative w-[1290px] max-[1385px]:w-[780px] max-[900px]:w-[500px] h-[700px] max-[1385px]:h-[420px] max-[900px]:h-[270px] bg-bg1-2 bg-cover bg-center bg-no-repeat">
          <div className="absolute top-[-180px] max-[1385px]:top-[-90px] max-[900px]:top-[-70px] z-[-1] right-[330px] max-[1385px]:right-[200px] max-[900px]:right-[120px] bg-w1 bg-center bg-cover bg-no-repeat w-[200px] max-[1385px]:w-[140px] max-[900px]:w-[100px] h-[250px] max-[1385px]:h-[150px] max-[900px]:h-[120px] animate-left-right2"></div>
          <div className="absolute top-[-180px] max-[1385px]:top-[-100px] max-[900px]:top-[-70px] right-[70px] max-[1385px]:right-[10px] bg-b2b bg-center bg-cover bg-no-repeat w-[350px] max-[1385px]:w-[250px] max-[900px]:w-[150px] h-[350px] max-[1385px]:h-[250px] max-[900px]:h-[150px] animate-left-right2"></div>
          <div
            className={`absolute ${
              isVisible ? "" : "translate-y-[-600px] translate-x-[-2000px]"
            } duration-[0.7s] ease-in-out `}
          >
            <div className="absolute top-[-100px] max-[1385px]:top-[-70px] max-[900px]:top-[-50px] left-[910px] max-[1385px]:left-[620px] max-[900px]:left-[380px] w-[700px] max-[1385px]:w-[400px] max-[900px]:w-[300px] h-[850px] max-[1385px]:h-[550px] max-[900px]:h-[350px] bg-blue3 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
          </div>
          <div
            className={`absolute top-[155px] max-[1385px]:top-[100px] max-[900px]:top-[63px] left-[130px] max-[1385px]:left-[85px] max-[900px]:left-[55px] bg-seed bg-cover bg-center bg-no-repeat w-[120px] max-[1385px]:w-[60px] max-[900px]:w-[40px] h-[120px] max-[1385px]:h-[60px] max-[900px]:h-[40px] ${
              isVisible ? "scale-1 animate-move-up" : "scale-0"
            }`}
          ></div>
          <div
            className={`absolute top-[360px] max-[1385px]:top-[220px] max-[900px]:top-[137px]  left-[130px] max-[1385px]:left-[85px] max-[900px]:left-[55px] bg-human bg-cover bg-center bg-no-repeat w-[110px] max-[1385px]:w-[60px] max-[900px]:w-[40px] h-[110px] max-[1385px]:h-[65px] max-[900px]:h-[45px] duration-700 ease-in-out ${
              isVisible ? "scale-1 animate-humann" : "scale-0"
            }`}
          ></div>
          <div className="relative top-[170px] max-[1385px]:top-[90px] max-[900px]:top-[60px] left-[140px] max-[1385px]:left-[80px] max-[900px]:left-[50px] text-[#E0F5FF] text-[35px] max-[1385px]:text-[23px] max-[900px]:text-[18px] font-inter-bold flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-[400px] max-[1385px]:w-[350px] max-[900px]:w-[250px]">
              <div>Fat 0 g.</div>
              <div>0%</div>
            </div>
            <div className="w-[400px] max-[1385px]:w-[350px] max-[900px]:w-[250px]">
              Protein 0 g.
            </div>
            <div className="flex justify-between items-center w-[400px] max-[1385px]:w-[350px] max-[900px]:w-[250px]">
              <div>Carbohydrate 24 g.</div>
              <div>8%</div>
            </div>
            <div className="relative right-[67px]">Sugar 24 g.</div>
            <div className="flex justify-between items-center w-[400px] max-[1385px]:w-[350px] max-[900px]:w-[250px]">
              <div>Sodium 210 mg.</div>
              <div>11%</div>
            </div>
          </div>
          <div className="relative top-[200px] max-[1385px]:top-[100px] max-[900px]:top-[65px] left-[475px] max-[1385px]:left-[295px] max-[900px]:left-[175px] text-[#8BDBFF] text-[60px] max-[1385px]:text-[40px] max-[900px]:text-[25px] font-inter-bold">
            Blueberry Freshes
          </div>
        </div>
      </div>
    </div>
  );
}
