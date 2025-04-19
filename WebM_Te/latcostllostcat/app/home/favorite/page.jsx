"use client";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [favorite, setFavoite] = useState("bg-[url('/image/head/h1.png')]");
  return (
    <div className=" relative w-screen h-screen">
      <div className=" flex w-screen items-center h-[20vh] justify-between p-[1vw] pt-[2vw]">
        <Link
          href={"/home"}
          className="bg-[url('/image/register/backhome.png')] bg-cover bg-center w-[4vw] h-[4vw] relative hover:scale-105 duration-200 ease-in-out"
        />
        <div className="flex items-center gap-[1.3vw]">
          <Link
            href={"/home/favorite"}
            onMouseMove={() => {
              setFavoite("bg-[url('/image/head/h2.png')]");
            }}
            onMouseLeave={() => {
              setFavoite("bg-[url('/image/head/h1.png')]");
            }}
            className="bg-[#D4EDF1] text-[2vw] py-[0.7vw] px-[2vw] rounded-3xl gap-[1.5vw] flex items-center text-[#0D4E59] hover:bg-[#0D4E59] hover:text-[#D4EDF1] duration-100 ease-in-out relative"
          >
            <p className=" relative pt-[0.7vw]">favorite</p>
            <div
              className={` duration-100 ease-in-out ${favorite} bg-cover bg-center w-[3vw] h-[3vw] relative`}
            />
          </Link>
          <div className="bg-[url('/image/head/cat.png')] bg-cover bg-center w-[5vw] h-[5vw]" />
        </div>
      </div>
    </div>
  );
};
export default Page;
