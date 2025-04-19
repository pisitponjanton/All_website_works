"use Client";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
const HomeCat = () => {
  const { pname } = useUser();
  const provinces = [
    "Bangkok",
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
    province.toLowerCase().startsWith(pname.toLowerCase())
  );
  return (
    <div className=" w-screen h-[73vh] overflow-y-scroll flex justify-center relative">
      <div className=" grid grid-cols-3 gap-[2vw]">
        {filteredProvinces.map((i, j) => {
          return (
            <Link
              href={`/home/cat?catIndex=${i}&testkey=${j}`}
              key={j}
              className="w-[30vw] h-[38vw] bg-[#DFE1E1] flex items-center rounded-[2vw] relative flex-col"
            >
              <div className="w-[80%] h-[70%] bg-[#ffff] relative top-[2.5vw] rounded-t-[2vw]"></div>
              <div className="w-full h-[14%] relative bottom-[-6vw] bg-[#FFFFFF] border-[0.1vw] rounded-b-[2vw] flex justify-between items-center px-[0.5vw]">
                <div className="flex items-center gap-[1vw]">
                  <div className="bg-[url('/image/catcontrol/shop.png')] bg-cover bg-ceneter relative w-[4vw] h-[4vw]" />
                  <p className="pt-[1vw] text-[2vw]">{i}</p>
                </div>
                <div
                  className={`${
                    i % 2 == 0
                      ? "bg-[url('/image/head/h1.png')]"
                      : "bg-[url('/image/head/h2.png')]"
                  } bg-cover bg-center w-[4vw] h-[4vw] cursor-pointer`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCat;
