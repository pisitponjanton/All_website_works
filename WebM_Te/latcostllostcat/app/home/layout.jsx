"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeLayout({ children }) {
  const namepath = usePathname();
  const [cat, setCat] = useState("opacity-0");

  useEffect(() => {
    if (namepath === "/home/favorite" || namepath === "/home/cat") {
      setCat("opacity-0");
    } else {
      setCat("opacity-100");
    }
  }, [namepath]);

  return (
    <div className="relative">
      <div className="bg-[url('/image/head/allfootcat.png')] bg-cover bg-center w-[30vw] h-[47vw] absolute bottom-[3vw] right-[0.5vw] z-[-1]" />
      <div
        className={`bg-[url('/image/head/cat2.png')] bg-cover bg-center w-[8vw] h-[15vw] absolute bottom-0 right-0 ${cat} duration-500 ease-in-out z-[-1]`}
      />
      {children}
    </div>
  );
}
