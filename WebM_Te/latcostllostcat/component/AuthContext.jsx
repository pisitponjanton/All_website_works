"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const submit_signup = async (e) => {
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
      const response = await fetch(`${apiUrl}/signup`, {
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
      alert("เกิดข้อผิดพลาด, โปรดลองใหม่อีกครั้ง");
    }
  };
  const submit_login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("กรุณากรอก email และ password");
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/login`, {
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
      alert("เกิดข้อผิดพลาด");
    }
  };
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${apiUrl}/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
      }

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        fetchUser,
        submit_login,
        submit_signup,
        setEmail,
        setPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
