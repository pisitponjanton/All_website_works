"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("กรุณากรอก email และ password");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ เข้าสู่ระบบสำเร็จ Token:", data.token);
        alert("เข้าสู่ระบบสำเร็จ!");
        localStorage.setItem("token", data.token);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className=" w-screen h-screen bg-register flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-screen h-[40vw] absolute bottom-0 bg-[url('/image/register/test.png')] bg-cover bg-center"></div>
      <div className="w-[60vw] h-[45vw] bg-[#D9D9D9]/50 z-[5] rounded-3xl flex flex-col p-[3vw] max-sm:scale-[1.3]">
        <div className="flex flex-col text-[#0D4E59] relative">
          <h1 className="text-[5vw]">Hello!</h1>
          <h2 className="text-[3vw] relative top-[-2vw]">
            Welcome to lat cost
          </h2>
          <div className=" absolute top-0 left-[16.5vw] bg-[url('/image/logo.png')] bg-cover bg-center w-[4.5vw] h-[5.5vw]"></div>
        </div>
        <div className=" relative flex flex-col w-full justify-center items-center">
          <form
            onSubmit={submit}
            className=" relative flex flex-col text-[2.5vw] gap-[2vw] items-center w-full"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="e-mail"
              className="w-[80%] placeholder:text-[#566B6F] outline-none border-[0.2vw] border-[#0D4E59] rounded-lg pl-[1vw] pt-[1vw]"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="w-[80%] placeholder:text-[#566B6F] outline-none border-[0.2vw] border-[#0D4E59] rounded-lg pl-[1vw] pt-[1vw]"
            />
            <Link
              href={"/404"}
              className="text-[#6B2B2B] text-[1.5vw] relative right-[-14.5vw] top-[-1vw]"
            >
              forget password?
            </Link>
            <button
              type="submit"
              className="bg-[#0D4E59] text-[#ffff] w-[38%] pt-[1vw] rounded-4xl cursor-pointer relative top-[-2vw]"
            >
              Login
            </button>
            <div className="text-[#FFFFFF] text-[1.5vw] flex gap-[1vw] relative top-[-2vw]">
              <p>Don{"'"}t have account?</p>
              <Link href={"/signup"} className="text-[#A33333]">
                sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
