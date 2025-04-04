"use client";


const Shop = ({ data }) => {
  return (
    <div className={`w-full overflow-x-scroll snap-x flex items-center`}>
      <div className="flex gap-5 p-5">
        {data.map((j, i) => (
          <div
            key={i}
            className="overflow-hidden snap-center w-[300px] h-[250px] flex flex-col items-center rounded-2xl font-bold bg-[#e19090] duration-500 ease-in-out hover:scale-[1.04]"
          >
            <div className={`w-full h-[150px] bg-[#101010] flex justify-center items-center text-[#fff]`}>{j}</div>
            <button
              onClick={() => {
                window.location.href = `/test?id=${j}`;
              }}
              className={`relative top-[65px] cursor-pointer`}
            >
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
