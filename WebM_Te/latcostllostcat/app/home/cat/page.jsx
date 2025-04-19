"use client";
import CatData from "@/component_control/CatData";
import CatData_Head from "@/component_control/CatData_Head";
// import { useSearchParams } from "next/navigation";
const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
        <CatData_Head/>
        <CatData/>
    </div>
  );
};
export default Page;
