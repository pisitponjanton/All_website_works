"use client";

import Center1 from "../component/Center1";
import List from "../component/List";
import Water1 from "../component/Water1";
import Water2 from "../component/Water2";
import Water3 from "../component/Water3";

export default function Hero1() {
  // const handleClick1 = () => {
  //   window.scrollTo({
  //     top: 0, // ตำแหน่งแนวตั้ง (px)
  //     behavior: "smooth", // การเลื่อนอย่างนุ่มนวล
  //   });
  // };

  // const handleClick2 = () => {
  //   window.scrollTo({
  //     top: 4210, // ตำแหน่งแนวตั้ง (px)
  //     behavior: "smooth", // การเลื่อนอย่างนุ่มนวล
  //   });
  // };

  // const handleClick3 = () => {
  //   window.scrollTo({
  //     top: 5000, // ตำแหน่งแนวตั้ง (px)
  //     behavior: "smooth", // การเลื่อนอย่างนุ่มนวล
  //   });
  // };
  return (
    <div className="w-screen overflow-hidden relative">
      <div className="bg-ch w-[728px] h-[675px] bg-cover bg-center bg-no-repeat absolute top-[-400px] right-[-380px]"></div>
      <div className="bg-ch w-[728px] h-[675px] bg-cover bg-center bg-no-repeat absolute top-[-450px] left-[-380px] rotate-[280deg]"></div>
      <div className="top-[45px] left-[80px] absolute animate-move-up z-[20] max-[978px]:scale-[0.8] max-[978px]:left-[50px] max-[700px]:scale-[0.6] max-[700px]:left-[-110px] max-[440px]:scale-[0.4] max-[440px]:left-[-200px] max-[440px]:top-0">
        <div className="w-[700px] h-[250px] bg-name bg-cover bg-center bg-no-repea animate-up-down"></div>
      </div>
      <div className="w-screen z-[100] relative flex justify-end">
        <div className="flex justify-around w-[500px] p-5 text-[25px] max-[440px]:text-[18px] font-inter-bold text-[#ffff]">
          <div
            // onClick={handleClick1}
            className="cursor-pointer duration-500 ease-in-out hover:scale-110"
          >
            Home
          </div>
          <div
            // onClick={handleClick2}
            className="cursor-pointer duration-500 ease-in-out hover:scale-110"
          >
            About Us
          </div>
          <div
            // onClick={handleClick3}
            className="cursor-pointer duration-500 ease-in-out hover:scale-110"
          >
            Contact
          </div>
        </div>
      </div>
      <div className="mt-[500px] max-[440px]:mt-[200px] max-[978px]:mt-[400px] max-[700px]:mt-[300px] w-full h-[800px] bg-Hero1bg max-[1385px]:h-[680px] max-[978px]:h-[460px] max-[700px]:h-[950px] max-[440px]:h-[850px] ">
        <div className="flex justify-center items-center">
          <Center1 />
        </div>
      </div>
      <List />
      <Water1 />
      <Water2 />
      <Water3 />
    </div>
  );
}
