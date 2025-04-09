"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Head() {
  const [log, setLog] = useState(["translate-x-[5vw]", "translate-x-[8vw]", 0]);
  return (
    <div
      className={`flex justify-between items-center h-[10vw] px-[4vw] overflow-hidden `}
    >
      <Image
        src={"/image/logo.png"}
        width={100}
        height={100}
        alt="Logo"
        className="hover:scale-105 cursor-pointer duration-300 ease-in-out w-[8vw] h-[9vw]"
      />
      <div className="flex justify-around items-center w-[50vw] text-[#000000] text-[2.5vw] pt-[0.5vw]">
        <Link href={"/"}>Home</Link>
        <Link href={"#aboutus"}>about us</Link>
        <Link href={"#contact"}>contact</Link>
      </div>
      <div className=" relative flex justify-center items-center">
        <div className="flex justify-center items-center relative rounded-3xl overflow-hidden bg-[#000000] text-[1.4vw]">
          <Link
            href={"/signup"}
            onClick={() => {
              setLog(["translate-x-[-5vw]", "translate-x-[-8vw]", 1]);
            }}
            className={`z-[1] ${
              log[2] == 0 ? "text-[#F4DC61]" : "text-[#000000]"
            }  pt-[0.5vw] flex justify-center items-center w-[8vw] h-[3vw]`}
          >
            sign up
          </Link>
          <Link
            href={"/login"}
            onClick={() => {
              setLog(["translate-x-[5vw]", "translate-x-[8vw]", 0]);
            }}
            className={`z-[1] ${
              log[2] == 1 ? "text-[#F4DC61]" : "text-[#000000]"
            } pt-[0.5vw] flex justify-center items-center w-[8vw] h-[3vw]`}
          >
            log in
          </Link>
          <div
            className={` ${log[0]} rounded-3xl absolute duration-300 ease-in-out bg-[#F4DC61] w-[9vw] h-full`}
          ></div>
        </div>
        <div
          className={`${log[1]} z-[0] w-[4vw] h-[4vw] bg-[#F4DC61] rounded-full absolute duration-500 ease-in-out flex justify-center items-center text-[#fff]`}
        >
          <div className="ml-[0.5vw] w-[2vw] h-[3vw] bg-[url('/image/cat.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
