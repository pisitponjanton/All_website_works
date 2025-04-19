"use client";
import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [haveToken,setHaveToken] = useState(null);

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
        alert("สมัครสำเร็จ!");
        localStorage.setItem("token", data.token);
        checkTokenExpiration();
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
        alert("เข้าสู่ระบบสำเร็จ!");
        localStorage.setItem("token", data.token);
        checkTokenExpiration();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาด");
    }
  };

  const checkTokenExpiration = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${apiUrl}/check-token`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setHaveToken(true);
        if (pathname !== "/home" && pathname !== "/" ) {
          window.location.href = "/home";
        }
      } else {
        setHaveToken(false)
        localStorage.setItem("token","")
        if(pathname !== "/login" && pathname !== "/" ){
          localStorage.setItem("token", "");
          window.location.href = "/login";
        }
      }
    } catch (error) {
      console.log("Invalid token")
    }
  };

  return (
    <AuthContext.Provider
      value={{
        haveToken,
        checkTokenExpiration,
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
