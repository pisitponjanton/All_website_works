"use client";
import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage.");
      return null;
    }

    try {
      const response = await fetch(`${apiUrl}/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error("ไม่สามารถดึงข้อมูลผู้ใช้ได้")
        return
      }

      const data = await response.json();
      setUser({
        id : data.user.id || null,
        email : data.user.email || null,
      })
      return true;
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ fetchUser ,user}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
