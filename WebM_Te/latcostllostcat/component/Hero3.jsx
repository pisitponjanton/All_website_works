"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero3() {
  return (
    <div className="w-screen flex flex-col justify-center items-center z-[1] relative mt-[12vw]">
      <div className="bg-[url('/image/Hero3/bgfull.png')] duration-500 ease-in-out hover:scale-105 bg-cover bg-center w-[85vw] h-[40.5vw] absolute top-[-20vw]"></div>
      <div className="w-screen h-[20vw] bg-[#1997AD] relative mt-[25vw]">
        <div className=" absolute w-[15vw] h-[16vw] bg-[url('/image/Hero3/cat.png')] bg-cover bg-center left-[4vw] top-[2vw]"></div>
        <div className=" relative w-[35vw] right-[-23vw] top-[3vw] text-[2.2vw] text-[#0E4F5A]">
          If you{"'"}d like to give a special cat a loving home or support our
          mission, we{"'"}re here for you! Feel free to reach out — we{"'"}re
          happy to help. 🐾
        </div>
        <div className=" relative right-[-70vw] top-[-13vw] flex flex-col gap-[1vw]">
          <h1 className=" relative text-[#0D4E59] bg-[#FFFFFF] text-[2.5vw] w-[20vw] flex justify-center items-center pt-[1vw] rounded-4xl">
            Contact us
          </h1>
          <div className="flex gap-[4vw] relative right-[2vw] top-[1vw]">
            <Link
              href={
                "https://www.instagram.com/mte_company?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              target="_bank"
            >
              <Image
                src={"/image/Hero3/ig.png"}
                width={100}
                height={100}
                alt="ig"
                className="w-[5vw] h-[5vw] hover:scale-110 duration-300 ease-in-out"
              />
            </Link>
            <Link href={"tel:0645809429"}>
              <Image
                src={"/image/Hero3/tel.png"}
                width={100}
                height={100}
                alt="Tel"
                className="w-[5vw] h-[5vw] hover:scale-110 duration-300 ease-in-out"
              />
            </Link>
            <Link
              href={
                "mailto:mtecdesign22@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services."
              }
            >
              <Image
                src={"/image/Hero3/mail.png"}
                width={100}
                height={100}
                alt="mail"
                className="w-[5vw] h-[5vw] hover:scale-110 duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
