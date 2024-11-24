"use client";

export default function Contact() {
  return (
    <div className="w-screen h-[70vh] bg-[#1B1B33] mt-[50px] relative flex flex-col gap-[50px] overflow-hidden">
      <div className="w-full flex justify-around items-center relative top-[40px]">
        <div className="w-[580px] h-[220px] bg-namecon bg-cover bg-center bg-no-repea"></div>
        <div className="flex flex-col justify-center relative right-[100px] text-[#fff] font-inter-bold gap-3">
          <div className="text-[45px]">Navigation</div>
          <div className=" flex flex-col gap-3">
            <div className="text-[20px]">Home</div>
            <div className="text-[20px]">About us</div>
            <div className="text-[20px]">Contact</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around relative items-center text-[#fff] font-inter-bold ">
        <div className="flex justify-center items-center relative left-1 gap-[40px]">
          <div className="bg-map bg-cover bg-center bg-no-repeat w-[70px] h-[70px]"></div>
          <div className="w-[400px] text-[25px]">
            Street3720 PoteeSt. City Baltimore State Maryland Postal Code21225
            Country United States
          </div>
        </div>
        <div className="flex relative justify-center items-center right-[-54px] gap-[30px]">
          <div className="bg-mail bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
          <div className="text-[25px]">freshesdrink@hotmail.com</div>
        </div>
      </div>
      <div className="w-full flex justify-around relative items-center text-[#fff] font-inter-bold">
        <div className="flex justify-center items-center gap-[30px] relative left-[-90px]">
            <div className="bg-tel bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
            <div className="text-[25px]">(410) 355-2227</div>
        </div>
        <div className="flex justify-center items-center gap-[30px] relative right-[-165px]">
            <div className="bg-ig bg-cover bg-center bg-no-repeat w-[50px] h-[50px]"></div>
            <div className="bg-face bg-cover bg-center bg-no-repeat w-[50px] h-[50px]"></div>
            <div className="bg-youtube bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
        </div>
      </div>
    </div>
  );
}
