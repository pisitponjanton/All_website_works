"use client";

export default function Contact() {
  return (
    <div className="w-screen pb-[50px] bg-[#1B1B33] flex justify-center items-center mt-[50px] font-inter-bold text-[#fff] pt-[100px] overflow-hidden
    max-[1290px]:flex-col
    max-[1290px]:pt-[50px]
    max-[500px]:pt-[0px]
    max-[500px]:pb-[0px]
    ">
      <div className="w-[50%] h-full
      max-[1290px]:w-full
      max-[700px]:scale-[0.7]
      max-[500px]:scale-[0.5]">
        <div className="flex flex-col items-start px-[100px] 
      max-[700px]:px-[20px]
      max-[500px]:px-[0px]
        ">
          <div className="bg-namecon bg-no-repeat bg-cover bg-center w-[580px] h-[220px] relative
          max-[500px]:scale-[0.9] max-[500px]:left-[-100px]"></div>

          <div className="flex justify-center items-center gap-[30px] mt-[50px] max-[1290px]:hidden">
            <div className="bg-map bg-no-repeat bg-cover bg-center w-[70px] h-[70px]"></div>
            <div className="text-[20px] flex flex-col">
              <div>Street3720 PoteeSt.</div>
              <div>City Baltimore State Maryland Postal</div>
              <div> Code21225 Country United States</div>
            </div>
          </div>
          <div className="text-[#fff] min-[1290px]:hidden mt-[50px]">
            <div className="text-[40px]">Navigation</div>
            <div className="text-[20px] mt-[20px]">Home</div>
            <div className="text-[20px] mt-[10px]">About us</div>
            <div className="text-[20px] mt-[10px]">Contact</div>
          </div>

          <div className="flex justify-center items-center gap-[30px] mt-[100px]">
            <div className="bg-tel bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
            <div className="text-[25px]">(410) 355-2227</div>
          </div>
        </div>
      </div>

      <div className="w-[50%] h-full
      max-[1290px]:w-full max-[1290px]:mt-[100px]
      max-[700px]:scale-[0.7] max-[700px]:mt-[-50px]
      max-[500px]:scale-[0.5] max-[500px]:mt-[-200px]">
        <div className="flex flex-col items-start px-[100px]
        max-[700px]:px-[20px]
        max-[500px]:px-[0px]">
          <div className="text-[#fff] max-[1290px]:hidden">
            <div className="text-[40px]">Navigation</div>
            <div className="text-[20px] mt-[20px]">Home</div>
            <div className="text-[20px] mt-[10px]">About us</div>
            <div className="text-[20px] mt-[10px]">Contact</div>
          </div>
          <div className="flex justify-center items-center gap-[30px] min-[1290px]:hidden">
            <div className="bg-map bg-no-repeat bg-cover bg-center w-[70px] h-[70px]"></div>
            <div className="text-[20px] flex flex-col">
              <div>Street3720 PoteeSt.</div>
              <div>City Baltimore State Maryland Postal</div>
              <div> Code21225 Country United States</div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[30px] mt-[100px]">
            <div className="bg-mail bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
            <div className="text-[25px]">freshesdrink@hotmail.com</div>
          </div>

          <div className="flex justify-center items-center gap-[30px] mt-[100px]">
            <div className="bg-ig bg-cover bg-center bg-no-repeat w-[50px] h-[50px]"></div>
            <div className="bg-face bg-cover bg-center bg-no-repeat w-[50px] h-[50px]"></div>
            <div className="bg-youtube bg-cover bg-center bg-no-repeat w-[60px] h-[60px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
