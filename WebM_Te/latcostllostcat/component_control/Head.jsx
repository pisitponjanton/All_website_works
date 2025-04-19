"use Client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
const Head = () => {
  const { setPName } = useUser();
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState("hidden");
  const [pro, setPro] = useState(null);
  const [favorite, setFavoite] = useState("bg-[url('/image/head/h1.png')]");
  const provinces = [
    "Bangkok",
    "Amnat Charoen",
    "Ang Thong",
    "Bueng Kan",
    "Buriram",
    "Chachoengsao",
    "Chai Nat",
    "Chaiyaphum",
    "Chanthaburi",
    "Chiang Mai",
    "Chiang Rai",
    "Chonburi",
    "Chumphon",
    "Kalasin",
    "Kamphaeng Phet",
    "Kanchanaburi",
    "Khon Kaen",
    "Krabi",
    "Lampang",
    "Lamphun",
    "Loei",
    "Lopburi",
    "Mae Hong Son",
    "Maha Sarakham",
    "Mukdahan",
    "Nakhon Nayok",
    "Nakhon Pathom",
    "Nakhon Phanom",
    "Nakhon Ratchasima",
    "Nakhon Sawan",
    "Nakhon Si Thammarat",
    "Nan",
    "Narathiwat",
    "Nong Bua Lamphu",
    "Nong Khai",
    "Nonthaburi",
    "Pathum Thani",
    "Pattani",
    "Phang Nga",
    "Phatthalung",
    "Phayao",
    "Phetchabun",
    "Phetchaburi",
    "Phichit",
    "Phitsanulok",
    "Phra Nakhon Si Ayutthaya",
    "Phrae",
    "Phuket",
    "Prachinburi",
    "Prachuap Khiri Khan",
    "Ranong",
    "Ratchaburi",
    "Rayong",
    "Roi Et",
    "Sa Kaeo",
    "Sakon Nakhon",
    "Samut Prakan",
    "Samut Sakhon",
    "Samut Songkhram",
    "Saraburi",
    "Satun",
    "Sing Buri",
    "Sisaket",
    "Songkhla",
    "Sukhothai",
    "Suphan Buri",
    "Surat Thani",
    "Surin",
    "Tak",
    "Trang",
    "Trat",
    "Ubon Ratchathani",
    "Udon Thani",
    "Uthai Thani",
    "Uttaradit",
    "Yala",
    "Yasothon",
  ];
  const filteredProvinces = provinces.filter((province) =>
    province.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <div className="w-screen h-[20vh] flex items-center justify-between p-[1vw] pt-[2vw]">
      <div className=" flex flex-col w-[30%] h-full relative justify-center">
        <div className="border-[0.2vw] p-[0.5%] relative rounded-[1vw] flex justify-around items-center w-full h-[5vw]">
          <Image
            src="/image/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="w-[4vw] h-[4.5vw] cursor-pointer"
            onClick={() => {
              dropDown === "hidden" ? setDropDown("") : setDropDown("hidden");
            }}
          />
          <div
            onClick={() => {
              dropDown === "hidden" ? setDropDown("") : setDropDown("hidden");
            }}
            className="text-[#0D4E59] text-[2vw] w-[60%] flex justify-center overflow-hidden cursor-pointer"
          >
            {pro
              ? pro.length > 12
                ? pro.substring(0, 12) + "..."
                : pro
              : "Select Province"}
          </div>
          <div
            onClick={() => {
              dropDown === "hidden" ? setDropDown("") : setDropDown("hidden");
            }}
            className="bg-[url('/image/head/down.png')] bg-cover bg-center w-[2vw] h-[2vw] cursor-pointer"
          />
          <div
            className={`${dropDown} z-[10] top-[4.8vw] rounded-b-[1vw] absolute w-full flex flex-col items-center pt-[1vw] h-[30vw] bg-[#0D4E59] overflow-y-scroll`}
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="bg-[#F8E794] w-[84%] outline-none pl-[13%] text-[2vw] pt-[1%] rounded-[1vw]"
            ></input>
            <div className=" absolute w-[2vw] h-[2vw] bg-[url('/image/head/search.png')] bg-cover bg-center top-[1.5vw] left-[3vw]"></div>
            <div className="text-[#ffff] relative w-full p-[1vw] text-[2vw] flex flex-col gap-[1vw] items-center h-full">
              {filteredProvinces.map((i, j) => {
                return (
                  <div
                    onClick={() => {
                      setPro(i);
                      setDropDown("hidden");
                      setPName(i);
                    }}
                    key={j}
                    className="w-[90%] h-[10%] border-1 flex pt-[2%] pl-[5%] items-center cursor-pointer "
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[1.3vw] z-[2]">
        <Link
          href={"/home/favorite"}
          onMouseMove={() => {
            setFavoite("bg-[url('/image/head/h2.png')]");
          }}
          onMouseLeave={() => {
            setFavoite("bg-[url('/image/head/h1.png')]");
          }}
          className="bg-[#D4EDF1] text-[2vw] py-[0.7vw] px-[2vw] rounded-3xl gap-[1.5vw] flex items-center text-[#0D4E59] hover:bg-[#0D4E59] hover:text-[#D4EDF1] duration-100 ease-in-out relative"
        >
          <p className=" relative pt-[0.7vw]">favorite</p>
          <div
            className={` duration-100 ease-in-out ${favorite} bg-cover bg-center w-[3vw] h-[3vw] relative`}
          />
        </Link>
        <div className="bg-[url('/image/head/cat.png')] bg-cover bg-center w-[5vw] h-[5vw]" />
      </div>
    </div>
  );
};
export default Head;
