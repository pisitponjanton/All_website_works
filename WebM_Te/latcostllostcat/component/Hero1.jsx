import Image from "next/image";
import Link from "next/link";

export default function Hero1() {
  return (
    <div className="w-screen relative flex flex-col items-center">
      <h1 className="text-[#0D4E59] text-[5vw] absolute animate-slide">
        Welcome to
      </h1>
      <h1 className="text-[#0D4E59] text-[18vw] font-RubikMaps animate-text relative">
        <span>L</span>
        <span>A</span>
        <span>T</span> <span>C</span>
        <span>O</span>
        <span>S</span>
        <span>T</span>
      </h1>
      <div className=" absolute bg-[url('/image/Hero1/footcat1.png')] bg-cover bg-center w-[8vw] h-[8vw] top-[-3vw] right-[28.5vw] animate-slide"></div>
      <Image
        src="/image/4cat.png"
        width={1300}
        height={100}
        alt="BigCat"
        className=" w-full z-[1] animate-scale relative top-[-15vw]"
      />
      <Link href={"https://www.youtube.com"} target="_bank" className="animate-scale hover:scale-105 duration-300 ease-in-out bg-[#F4DC61] hover:bg-[#000] hover:text-[#F4DC61] py-[0.3vw] px-[3vw] rounded-4xl absolute bottom-[18vw] z-[1] text-[3vw] pt-[1vw]">Start here</Link>
    </div>
  );
}
