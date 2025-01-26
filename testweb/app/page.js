"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [_Enroll, setEnroll] = useState("");
  const [alertEnroll, setalertEnroll] = useState("scale-0");
  const _submit = () => {
    if (_Enroll === "M_TESTER_PYTHON01") {
      window.location.href = "/python";
      localStorage.setItem("User", "Python");
    } else {
      setalertEnroll("scale-1");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("User") === "Python") {
      window.location.href = "/python";
      localStorage.setItem("User", "Python");
    }
  });

  return (
    <div className=" relative bg-[#1B1B33] w-screen h-screen flex flex-col justify-center items-center gap-5">
      <div
        className={`absolute w-[390px] h-[270px] bg-[#e9c4c4] rounded-3xl ${alertEnroll} duration-300 ease-in-out flex flex-col justify-center items-center`}
      >
        <div className="w-[100px] h-[100px] absolute top-10 bg-mark bg-cover bg-center bg-no-repeat"></div>
        <h1 className=" absolute text-[30px] text-[#1B1B33] top-[145px] font-myfont">Enroll Error</h1>
        <button
          className="text-[#1B1B33] text-[20px] bg-[#FFEA8E] p-1 px-5 rounded-md absolute bottom-5"
          onClick={() => setalertEnroll("scale-0")}
        >
          close
        </button>
      </div>
      <h1 className="text-[40px] text-[#CF264A] font-myfont">M-Te.TH</h1>
      <input
        className="outline-none py-2 px-3 rounded-lg w-[200px] text-[#000] placeholder:text-[#424242]"
        type="text"
        placeholder="Enroll"
        onChange={(e) => setEnroll(e.target.value)}
      />
      <button
        onClick={_submit}
        className="text-[#1B1B33] text-[20px] bg-[#FFEA8E] p-1 px-5 rounded-md"
      >
        Submit
      </button>
    </div>
  );
}
