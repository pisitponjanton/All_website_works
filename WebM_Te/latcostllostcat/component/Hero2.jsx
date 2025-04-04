"use client";

import Image from "next/image";

export default function Hero2() {
  return (
    <div className="w-screen h-[65vw] relative flex flex-col top-[-15vw] items-center overflow-hidden pt-[5vw]">
      <div className=" absolute bg-[url('/image/component/footcat1.png')] bg-cover bg-center w-[30vw] h-[30vw] top-[-8vw] right-0 z-[-1]"></div>
      <h1 className="text-[#4F6816] text-[6.5vw]">Caring furry friends</h1>
      <div className=" w-full relative snap-x flex overflow-x-scroll">
        <div className="flex gap-[10vw] py-5 px-1">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div
                key={index}
                className={`hover:scale-105 relative snap-center w-[22vw] h-[30vw] bg-[url('/image/bgcat.png')] bg-cover bg-center duration-500 rounded-2xl flex flex-col justify-center items-center`}
              >
                <Image
                  src={`/image/cat/cat${index + 1}.png`}
                  width={100}
                  height={100}
                  alt={`${index}`}
                  className="w-[80%]"
                />
                <button className=" absolute bottom-[1vw] text-[2vw] bg-[#F4DC61] px-[25%] rounded-4xl pt-[4%]">
                  Read
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" absolute bg-[url('/image/component/footcat2.png')] bg-cover bg-center w-[25vw] h-[30vw] bottom-[-3vw] left-0 z-[-1]"></div>
    </div>
  );
}
