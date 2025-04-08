import Head from "@/component/Head";
import "./globals.css";

export const metadata = {
  title: "Lat Cost - รับเลี้ยงและหาเลี้ยงแมวจรจัด",
  description: "เว็บไซต์ Lat Cost ช่วยให้คุณสามารถรับเลี้ยงหรือหาเลี้ยงแมวจรจัดในแต่ละพื้นที่ เพื่อสร้างชุมชนที่ดีให้กับสัตว์ที่ต้องการความช่วยเหลือ.",
  keywords: "รับเลี้ยงแมวจรจัด, หาเลี้ยงแมวจรจัด, แมวจรจัด, การช่วยเหลือสัตว์, เลี้ยงแมว, แมวไร้บ้าน, สัตว์เลี้ยง, ช่วยแมวจรจัด",
  author: "ทีม Lat Cost",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={` w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
