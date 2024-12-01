"use client";

export default function About() {
  const handleClick1 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-screen h-[900px] max-[1080px]:h-[850px] max-[768px]:h-[750px] max-[590px]:h-[600px] flex justify-center relative overflow-hidden">
      <div className="w-full h-[750px] max-[1080px]:h-[700px] max-[768px]:h-[600px] max-[590px]:h-[500px] bg-Aboutbg relative  overflow-hidden flex ">
        <div className="relative top-[-10px] bg-bgaa bg-cover bg-center bg-no-repeat w-[35%] h-[105%] max-[590px]:hidden"></div>
        <div className="w-[65%] max-[590px]:w-[100%] h-full relative top-[50px] flex flex-col items-center">
          <div className="w-[90%] text-[#ffff] font-inter-bold">
            <div className="text-[55px] max-[1080px]:text-[50px] max-[945px]:text-[35px]">
              Simple <span className="text-[#8F91FF]">Solution</span>
            </div>
            <div className="text-[40px] max-[1080px]:text-[35px] max-[945px]:text-[20px]">
              Why did we create this beverage?
            </div>
          </div>
          <div className="relative top-[40px] flex gap-[50px]">
            <div className="flex flex-col relative justify-center items-center gap-[45px] text-[#fff] font-inter-bold text-[50px] max-[768px]:text-[40px]">
              <div className="absolute w-[10px] max-[375px]:w-[6px] h-full max-[1080px]:h-[80%] z-[9] bg-[#A0A2FF] "></div>
              <div
                className="w-[120px] h-[120px] max-[1080px]:w-[100px] max-[1080px]:h-[100px]  z-[10] bg-[#A0A2FF] rounded-full flex justify-center items-center
              max-[768px]:w-[70px] max-[768px]:h-[70px]
              max-[375px]:w-[50px] max-[375px]:h-[50px]"
              >
                1
              </div>
              <div
                className="w-[120px] h-[120px] max-[1080px]:w-[100px] max-[1080px]:h-[100px] z-[10] bg-[#A0A2FF]  rounded-full flex justify-center items-center
              max-[768px]:w-[70px] max-[768px]:h-[70px]
              max-[375px]:w-[50px] max-[375px]:h-[50px]"
              >
                2
              </div>
              <div
                className="w-[120px] h-[120px] max-[1080px]:w-[100px] max-[1080px]:h-[100px] z-[10] bg-[#A0A2FF]  rounded-full flex justify-center items-center
              max-[768px]:w-[70px] max-[768px]:h-[70px]
              max-[375px]:w-[50px] max-[375px]:h-[50px]"
              >
                3
              </div>
            </div>
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col font-inter-bold">
                <div className="text-[#fff] text-[30px] max-[1080px]:text-[25px] max-[768px]:text-[20px]">
                  We understand
                </div>
                <div className="text-[#B3B3B3] text-[20px] max-[1080px]:text-[15px] max-[768px]:text-[10px]">
                  <div>that sometimes, after a tiring</div>
                  <div>
                    workout, we crave a drink that&#8217;s both beneficial
                  </div>
                  <div>and delicious</div>
                </div>
              </div>
              <div className="flex flex-col font-inter-bold">
                <div className="text-[#fff] text-[30px] max-[1080px]:text-[25px] max-[768px]:text-[20px]">
                  But
                </div>
                <div className="text-[#B3B3B3] text-[20px] max-[1080px]:text-[15px] max-[768px]:text-[10px]">
                  <div>it&#8217;s hard to find truly delicious beverages.</div>
                </div>
              </div>
              <div className="flex flex-col font-inter-bold">
                <div className="text-[#fff] text-[30px] max-[1080px]:text-[25px] max-[768px]:text-[20px]">
                  That&#8217;s why
                </div>
                <div className="text-[#B3B3B3] text-[20px] max-[1080px]:text-[15px] max-[768px]:text-[10px]">
                  <div>that sometimes, after a tiring</div>
                  <div>we decided to try creating our own beverage</div>
                  <div className="text-[#FFDA39]">“FIRST DRINK”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute rounded-2xl bottom-[60px] z-[10] w-[80%] h-[110px] max-[590px]:h-[70px] bg-[#1B1B33] flex justify-around items-center font-inter-bold">
        <div className="text-[#ffff] text-[40px] max-[1080px]:text-[35px] max-[768px]:text-[30px]
        max-[590px]:text-[20px]
        max-[375px]:text-[15px]">
          Ready to get started?
        </div>
        <div
          onClick={handleClick1}
          className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative p-3 border-[3px] rounded-3xl flex justify-center items-center text-[35px] text-[#fff]
          max-[1080px]:text-[30px] max-[1080px]:text-[25px] max-[768px]:text-[20px] max-[590px]:text-[10px]
          max-[375px]:text-[10px]"
        >
          Get Started
        </div>
      </div>
      <div className="absolute bottom-2 w-[95%] h-[5px] rounded-3xl bg-[#fff] "></div>
    </div>
  );
}
