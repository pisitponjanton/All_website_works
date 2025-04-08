"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Head() {
  const [log, setLog] = useState(["translate-x-[60px]", "translate-x-[90px]",0]);
  return (
    <div
      className={`flex justify-between items-center h-[120px] px-10 overflow-hidden `}
    >
      <Image
        src={"/image/logo.png"}
        width={100}
        height={100}
        alt="Logo"
        className="hover:scale-105 cursor-pointer duration-300 ease-in-out max-sm:hidden"
      />
      <div className="flex justify-around items-center w-[600px] text-[#000000] text-[20px] max-[321px]:text-[17px] ">
        <Link href={"/"}>Home</Link>
        <Link href={"/aboutus"}>about us</Link>
        <Link href={"/contact"}>contact</Link>
      </div>
      <div className=" relative flex justify-center items-center max-[567px]:hidden">
        <div className="flex justify-center items-center relative rounded-3xl overflow-hidden bg-[#000000]">
          <div
            onClick={() => {
              setLog(["translate-x-[-60px]", "translate-x-[-90px]",1]);
            }}
            className={`z-[1] ${log[2] == 0 ? "text-[#F4DC61]" : "text-[#000000]"} flex justify-center items-center w-[95px] h-[40px]`}
          >
            Login
          </div>
          <div
            onClick={() => {
              setLog(["translate-x-[60px]", "translate-x-[90px]",0]);
            }}
            className={`z-[1] ${log[2] == 1 ? "text-[#F4DC61]" : "text-[#000000]"} flex justify-center items-center w-[95px] h-[40px]`}
          >
            Logout
          </div>
          <div
            className={` ${log[0]} rounded-3xl absolute duration-300 ease-in-out bg-[#F4DC61] w-[110px] h-full`}
          ></div>
        </div>
        <div
          className={`${log[1]} z-[0] w-[50px] h-[50px] bg-[#F4DC61] rounded-full absolute duration-500 ease-in-out flex justify-center items-center text-[#fff]`}
        >
          <div className="ml-[5px] w-[30px] h-[40px] bg-[url('/image/cat.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
