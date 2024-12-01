"use client";

import { useRef, useState, useEffect } from "react";

export default function List() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ตั้งสถานะเป็น true เมื่อองค์ประกอบเข้าสู่หน้าจอ
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // ตั้งสถานะเป็น false เมื่อองค์ประกอบออกจากหน้าจอ
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // 10% ขององค์ประกอบต้องปรากฏบนหน้าจอ
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
    <div
      className="h-[230px] w-screen flex justify-center items-center z-10"
    >
      <div className="lboxlist rounded-3xl bg-[#CBCBFB] flex justify-center items-center max-[700px]:h-[680px] max-[700px]:w-[280px]">
        <div className="relative top-[60px] max-[1385px]:top-[40px] max-[978px]:top-[25px]  w-[100%] h-[100%] flex justify-center gap-[50px] items-center max-[700px]:flex-col">
          <div className="relative lists bg-bg1 bg-cover bg-center bg-no-repeat z-10 ">
            <div className=" animate-up-down z-20">
              <div className="lbu1 bg-blue bg-cover bg-center bg-no-repeat animate-left-right2"></div>
              <div className="lbu2 h-[190px] bg-blue bg-cover bg-center bg-no-repeat animate-left-right2"></div>
              <div className="lbu3 bg-blue2 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div
              ref={elementRef}
              className={`absolute lboxre1 duration-500 ease-in-out ${
                isVisible ? "animate-move-up" : "scale-0"
              }`}
            >
              <div className="lbox bg-blue3 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div className="ltext1 text-[#ffff] font-inter-bold">
              blueberry
            </div>
          </div>
          <div className="relative lists bg-bg2 bg-cover bg-center bg-no-repeat z-10">
            <div className="lgreen1_box animate-left-right2">
              <div className="lgreen1_size bg-green1 bg-cover bg-center bg-no-repeat animate-up-down"></div>
            </div>
            <div className="lgreen2_box animate-left-right2">
              <div className="lgreen2_size bg-green3 bg-cover bg-center bg-no-repeat animate-up-down"></div>
            </div>
            <div
              className={`absolute lboxre2 duration-500 ease-in-out ${
                isVisible ? "animate-move-up" : "scale-0"
              }`}
            >
              <div className="lbox bg-green2 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div className="ltext1 text-[#ffff] font-inter-bold">
              Green Apple
            </div>
          </div>
          <div className="relative lists bg-bg3 bg-cover bg-center bg-no-repeat z-10 ">
            <div className=" animate-up-down">
              <div className="lcherry1 bg-cherry2 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
              <div className="lcherry2 bg-cherry3 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div
              className={`absolute lboxre3 duration-700 ease-in-out ${
                isVisible ? "animate-move-up" : "scale-0"
              }`}
            >
              <div className="lbox bg-cherry1 bg-cover bg-center bg-no-repeat animate-left-right2"></div>
            </div>
            <div className="ltext1 text-[#ffff] font-inter-bold ">
              Cherry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
