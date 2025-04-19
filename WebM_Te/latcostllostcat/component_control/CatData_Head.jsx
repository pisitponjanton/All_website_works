import Link from "next/link";
const CatData = () => {
  return (
    <div className="flex items-center justify-between p-[1vw] pr-[2vw]">
      <div className="flex items-center gap-[2vw]">
        <Link
          href={"/home"}
          className="bg-[url('/image/register/backhome.png')] bg-cover bg-center w-[4vw] h-[4vw] relative hover:scale-105 duration-200 ease-in-out"
        />
        <h1 className="font-RubikMaps text-[6vw] text-[#0D4E59]">LAT COST</h1>
      </div>
      <div
        className={`bg-[url('/image/head/h1.png')] bg-cover bg-center w-[4vw] h-[4vw] cursor-pointer`}
      />
    </div>
  );
};
export default CatData;
