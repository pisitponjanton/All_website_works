'use client';
import { UserProvider } from "../../context/UserContext";
export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className=" w-screen h-screen">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
