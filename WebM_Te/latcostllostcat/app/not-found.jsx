"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Image
        src="/image/logo.png"
        width={100}
        height={100}
        alt="Logo"
        className="w-[12vw] animate-spin hover:scale-110 cursor-pointer duration-300 ease-in-out"
      />
      <h1 className="text-[9vw]">404</h1>
      <h1 className="text-[4vw]">Not Found</h1>
      <button
        onClick={() => router.back()}
        className="text-[3vw] hover:text-[#555550] underline cursor-pointer"
      >
        Return to Previous Page
      </button>
    </div>
  );
}
