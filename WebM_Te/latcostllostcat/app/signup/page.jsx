"use client";

import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  
  const submit = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmpassword) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
  
    if (password !== confirmpassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("อีเมลไม่ถูกต้อง");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ สมัครสำเร็จ Token:", data.token);
        alert("สมัครสำเร็จ!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("เกิดข้อผิดพลาด, โปรดลองใหม่อีกครั้ง");
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
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              placeholder="confirm password"
              className="w-[80%] placeholder:text-[#566B6F] outline-none border-[0.2vw] border-[#0D4E59] rounded-lg pl-[1vw] pt-[1vw]"
            />
            <button
              type="submit"
              className="bg-[#0D4E59] text-[#ffff] w-[38%] pt-[1vw] rounded-4xl cursor-pointer"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
