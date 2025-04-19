'use client'
import { useSearchParams } from "next/navigation";
const CatData = () => {
    const searchParams = useSearchParams();
    const catIndex = searchParams.get("catIndex");
  return (
    <div className="w-screen flex px-[5vw] gap-[3vw] justify-center">
      <div className="w-[35vw] h-[38vw] bg-[#0D4E59]"></div>
      <div className="flex flex-col gap-[2vw]">
        <div className="w-[45vw] h-[12vw] bg-[#0D4E59] rounded-[1.5vw] overflow-y-scroll py-[1vw] px-[2vw]">
          <div className="text-[#ffff] text-[1.5vw]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            quasi, aliquam dolorem corrupti sequi voluptate porro, voluptatibus
            temporibus praesentium architecto id, delectus numquam veniam.
            Praesentium asperiores optio, perferendis soluta laborum provident
            voluptatibus blanditiis voluptatem veritatis ea quas dolore sapiente
            ullam placeat eum. Nisi, qui nemo deserunt tempore accusantium illum
            dolorum saepe quibusdam rerum modi labore itaque pariatur mollitia
            obcaecati possimus beatae inventore expedita voluptatem neque
            ratione laborum aperiam nihil voluptas! Laborum ea ab ipsum amet
            doloribus suscipit natus aperiam dicta a ullam ut eius hic animi
            porro harum magnam asperiores rem itaque, ex voluptate! Quaerat
            necessitatibus quia animi laudantium esse.
          </div>
        </div>
        <div className="flex flex-col text-[1.7vw]">
          <h1>
            name : <span className="text-[#0D4E59]">{`-`}</span>
          </h1>
          <h1>
            characteristic :{" "}
            <span className="text-[#0D4E59]">{`both blind`}</span>
          </h1>
          <h1>
            color : <span className="text-[#0D4E59]">{`orange`}</span>
          </h1>
          <h1>
            province : <span className="text-[#0D4E59]">{catIndex}</span>
          </h1>
        </div>
        <div className="flex flex-col text-[1.7vw]">
          <h1>contact</h1>
          <h1>
            tel. : <span className="text-[#0D4E59]">{`0888887776`}</span>
          </h1>
          <h1>
            line : <span className="text-[#0D4E59]">{`@lovecat`}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default CatData;
