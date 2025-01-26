"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState({});
  const [f1, setf1] = useState("");
  const [alertFile, setalertFile] = useState("scale-0");
  const [alertText, setalertText] = useState("");
  useEffect(() => {
    if (localStorage.getItem("User") !== "Python") {
      window.location.href = "/";
    }
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !file.name.endsWith(".py")) {
      setalertText("Please select a file .py");
      setalertFile("scale-1");
      return;
    }
    if (!f1) {
      setalertText("Please select your requirements.");
      setalertFile("scale-1");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("case", +f1);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setalertFile("scale-1");
      setalertText("API Error");
    }
  };
  return (
    <div className=" relative flex flex-col justify-center items-center w-screen h-screen bg-[#1B1B33] font-myfont p-5">
      <div
        className={`${alertFile} absolute w-[390px] h-[270px] bg-[#e9c4c4] rounded-3xl duration-300 ease-in-out flex flex-col justify-center items-center`}
      >
        <div className="w-[100px] h-[100px] absolute top-10 bg-mark bg-cover bg-center bg-no-repeat"></div>
        <h1 className=" absolute text-[18px] text-[#1B1B33] top-[160px] font-myfont">
          {alertText}
        </h1>
        <button
          className="text-[#1B1B33] text-[20px] bg-[#FFEA8E] p-1 px-5 rounded-md absolute bottom-5"
          onClick={() => setalertFile("scale-0")}
        >
          close
        </button>
      </div>
      <button
        onClick={() => {
          localStorage.setItem("User", "");
          window.location.href = "/";
        }}
        className="text-[#fff] text-[30px] absolute bottom-9 left-10"
      >
        ⏎
      </button>
      <h1 className="text-[35px] font-extrabold text-[#CF264A]">M-TESTER.PY</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-[30px] w-full h-full"
      >
        <h1 className="text-[22px] text-[#ffff]">send your code here</h1>
        <input
          type="file"
          className="w-[200px] text-[#fff]"
          onChange={handleFileChange}
        />
        <input
          type="number"
          placeholder="Enter"
          min={1}
          onChange={(e) => setf1(e.target.value)}
          className=" outline-none py-2 px-3 rounded-lg w-[200px] text-[#000] placeholder:text-[#424242]"
        />
        <button
          type="submit"
          className="text-[#1B1B33] text-[20px] bg-[#FFEA8E] p-1 px-5 rounded-md"
        >
          Submit
        </button>
        <h1 className={`text-[20px] text-[#51F3FF]`}>
          {result.message
            ? result.message
            : result.error
            ? result.error
            : "M-Te.TH"}
        </h1>
      </form>
    </div>
  );
}
