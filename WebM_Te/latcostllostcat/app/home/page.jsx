"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useAuth } from "@/context/AuthContext";
import Head from "@/component_control/Head";
import HomeCat from "@/component_control/HomeCat";
const Page = () => {
  const { fetchUser} = useUser();
  const {checkTokenExpiration} = useAuth();

  useEffect(() => {
    const loadData = async () => {
        fetchUser();
        checkTokenExpiration();
    };
    loadData();
  }, [fetchUser]);

  return (
    <div className="w-screen h-screen overflow-hidden">
        <Head/>
        <HomeCat/>
    </div>
  );
};

export default Page;
