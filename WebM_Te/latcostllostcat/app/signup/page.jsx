"use client";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Page = () => {
  const {
    submit_signup,
    setEmail,
    setPassword,
    setConfirmPassword,
    checkTokenExpiration,
  } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkTokenExpiration();
    }
  }, [checkTokenExpiration]);

  return (
    <div className=" w-screen h-screen bg-register flex flex-col justify-center items-center relative overflow-hidden">
      <Link
        href={"/"}
        className="bg-[url('/image/register/backhome.png')] bg-cover bg-center w-[5vw] h-[5vw] absolute top-[1vw] left-[1vw] hover:scale-105 duration-200 ease-in-out"
      />
      <div className="w-screen h-[40vw] absolute bottom-0 bg-[url('/image/register/test.png')] bg-cover bg-center"></div>
      <div className="w-[60vw] h-[45vw] bg-[#D9D9D9]/50 z-[5] rounded-3xl flex flex-col p-[3vw] max-sm:scale-[1.3] animate-scale">
        <div className="flex flex-col text-[#0D4E59] relative">
          <h1 className="text-[5vw]">Hello!</h1>
          <h2 className="text-[3vw] relative top-[-2vw]">
            Welcome to lat cost
          </h2>
          <div className=" absolute top-0 left-[16.5vw] bg-[url('/image/logo.png')] bg-cover bg-center w-[4.5vw] h-[5.5vw]"></div>
        </div>
        <div className=" relative flex flex-col w-full justify-center items-center top-[-1vw]">
          <form
            onSubmit={submit_signup}
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
            <div className="flex gap-[1vw] text-[1.5vw] relative top-[-1vw]">
                <h3 className="text-[#ffff]">already have account</h3>
                <Link href={"/login"} className="text-[#A33333]">log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
