"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="w-screen h-screen bg-black text-[#ffff] text-[100px] flex justify-center items-center">
      {id ? id : "Loading..."}
    </div>
  );
};

export default Page;
