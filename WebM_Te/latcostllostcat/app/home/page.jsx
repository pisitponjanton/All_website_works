"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useAuth } from "@/context/AuthContext";
const Page = () => {
  const { fetchUser, user } = useUser();
  const {checkTokenExpiration} = useAuth();

  useEffect(() => {
    const loadData = async () => {
        fetchUser();
        checkTokenExpiration();
    };
    loadData();
  }, [fetchUser]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-[3vw]">{user ? user.email : "loading..."}</h1>
      <button onClick={()=>{localStorage.setItem("token","")}} className=" cursor-pointer">Logout</button>
    </div>
  );
};

export default Page;
