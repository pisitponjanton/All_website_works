"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero2() {
  const [checkIndex, setCheckIndex] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [text, _] = useState({
    text1: [
      `Jingjo: The Little Cat Who Never Gave Up Jingjo was born without her front legs.She came into the world alongside her siblings, but
            sadly, all of them passed away, leaving her the only survivor. Local
            vendors tried their best to help her.Some days, they would move her
            to different spots to hide from stray dogs, but no one could take
            her home — not everyone had enough time or resources to care for a
            special needs kitten like Jingjo. Not only did she move slowly
            because of her missing front legs, but she also had a crossed eye
            and might be blind in one eye.`,
      `But don't worry — today, Jingjo has finally found a loving forever home!`,
    ],
    text2: [
      `Chocolate is a cat who was born completely blind in both eyes.Without the ability to see, he spent his early days living at a temple, where he had no owner to care for him.Each day was a challenge, as he struggled to find his way around and survive without the gift of sight.`,
      `But now, Chocolate has finally found a loving home.`,
    ],
    text3: [``, ``],
    text4: [``, ``],
    text5: [``, ``],
  });
  const [catSw, setCatSw] = useState({
    nameColor: "text-[#89EEFF]",
    name: "jing-joe(kangaroo)",
    textU: text.text1[0],
    textD: text.text1[1],
    bgcolor: "bg-[#0D4E59]",
    bg: `rotate-[0deg]`,
    cat1: `rotate-[0deg] left-[-30vw] top-[0vw]`,
    cat2: `scale-[0.3] rotate-[0deg] left-[-8vw] top-[-18vw] blur-xl`,
    cat3: `scale-[0.4] rotate-[0deg]  right-[-10vw] top-[1vw] blur-xl`,
    cat4: `scale-[0.4] rotate-[0deg] left-[16vw] bottom-[-10vw] blur-xl`,
    cat5: `scale-[0.35] rotate-[0deg] left-[-2vw] top-[22vw] blur-xl`,
  });
  const catF = () => {
    if (checkIndex % 5 === 1) {
      setCatSw({
        nameColor: "text-[#FFB7B7]",
        name: "Chocolate",
        textU: text.text2[0],
        textD: text.text2[1],
        bgcolor: "bg-[#6B2B2B]",
        bg: `rotate-[-72deg]`,
        cat1: `scale-[0.3] rotate-[72deg] left-[-19vw] top-[-2vw] blur-xl`,
        cat2: `rotate-[72deg] left-[-8vw] top-[-30vw]`,
        cat3: `scale-[0.33] rotate-[72deg] right-[-10vw] top-[-7vw] blur-xl`,
        cat4: `scale-[0.4] rotate-[72deg] left-[16vw] bottom-[-10vw] blur-xl`,
        cat5: `scale-[0.4] rotate-[72deg] left-[-5vw] top-[20vw] blur-xl`,
      });
    } else if (checkIndex % 5 === 2) {
      setCatSw({
        nameColor: "text-[#]",
        name: "",
        textU: text.text3[0],
        textD: text.text3[1],
        bgcolor: "bg-[#1F322B]",
        bg: `rotate-[-144deg]`,
        cat1: `scale-[0.4] rotate-[144deg] left-[-10vw] top-[2vw] blur-xl`,
        cat2: `scale-[0.3] rotate-[144deg] left-[-3vw] top-[-18vw] blur-xl`,
        cat3: `rotate-[144deg] right-[-20vw] top-[-9vw]`,
        cat4: `scale-[0.3] rotate-[144deg] left-[23vw] bottom-[-5vw] blur-xl`,
        cat5: `scale-[0.3] rotate-[144deg] left-[-5vw] top-[20vw] blur-xl`,
      });
    } else if (checkIndex % 5 === 3) {
      setCatSw({
        nameColor: "text-[#]",
        name: "",
        textU: text.text4[0],
        textD: text.text4[1],
        bgcolor: "bg-[#2A1C3C]",
        bg: `rotate-[-216deg]`,
        cat1: `scale-[0.4] rotate-[216deg] left-[-10vw] top-[2vw] blur-xl`,
        cat2: `scale-[0.4] rotate-[216deg] left-[2vw] top-[-15vw] blur-xl`,
        cat3: `scale-[0.33] rotate-[216deg] right-[-10vw] top-[-4vw] blur-xl`,
        cat4: `rotate-[216deg] left-[30vw] bottom-[-15vw]`,
        cat5: `scale-[0.32] rotate-[216deg] left-[0vw] top-[24vw] blur-xl`,
      });
    } else if (checkIndex % 5 === 4) {
      setCatSw({
        nameColor: "text-[#]",
        name: "",
        textU: text.text5[0],
        textD: text.text5[1],
        bgcolor: "bg-[#523110]",
        bg: `rotate-[-288deg]`,
        cat1: `scale-[0.3] rotate-[288deg] left-[-20vw] top-[2vw] blur-xl`,
        cat2: `scale-[0.4] rotate-[288deg] left-[2vw] top-[-15vw] blur-xl`,
        cat3: `scale-[0.4] rotate-[288deg] right-[-10vw] top-[1vw] blur-xl`,
        cat4: `scale-[0.33] rotate-[288deg] left-[19vw] bottom-[-7vw] blur-xl`,
        cat5: `rotate-[288deg] left-[-7vw] top-[32vw]`,
      });
    } else {
      setCatSw({
        nameColor: "text-[#89EEFF]",
        name: "jing-joe(kangaroo)",
        textU: text.text1[0],
        textD: text.text1[1],
        bgcolor: "bg-[#0D4E59]",
        bg: `rotate-[0deg]`,
        cat1: `rotate-[0deg] left-[-30vw] top-[0vw]`,
        cat2: `scale-[0.3] rotate-[0deg] left-[-8vw] top-[-18vw] blur-xl`,
        cat3: `scale-[0.4] rotate-[0deg]  right-[-10vw] top-[1vw] blur-xl`,
        cat4: `scale-[0.4] rotate-[0deg] left-[16vw] bottom-[-10vw] blur-xl`,
        cat5: `scale-[0.35] rotate-[0deg] left-[-2vw] top-[22vw] blur-xl`,
      });
    }
    setCheckIndex(checkIndex + 1);
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        catF();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isRunning, checkIndex]);

  const stopTimer = () => {
    if (!isRunning) {
      catF();
    }
    setIsRunning(false);
    const timer = setTimeout(() => {
      setIsRunning(true);
    }, 10000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="w-screen flex items-center flex-col relative">
      <div className=" absolute bg-[url('/image/Hero2/footcat1.png')] bg-cover bg-center w-[10vw] h-[10vw] top-[-14vw] left-[9.5vw]"></div>
      <h1 className="text-[6.5vw] text-[#0D4E59] relative top-[-11vw]" id="aboutus">
        caring furry friend
      </h1>
      <div
        className={` cursor-pointer w-[90vw] h-[45vw] rounded-[3.5vw] ${catSw.bgcolor} duration-1000 ease-in-out relative top-[-12vw] flex overflow-hidden`}
        onClick={stopTimer}
      >
        <div className=" absolute bg-[url('/image/Hero2/c1.png')] bg-cover bg-center w-[25vw] h-[25vw]" />
        <div className=" absolute bg-[url('/image/Hero2/c2.png')] bg-cover bg-center w-[45vw] h-[40vw] left-[22vw] top-[3vw]" />
        <div className=" absolute bg-[url('/image/Hero2/c3.png')] bg-cover bg-center w-[20vw] h-[20vw] right-0" />
        <div className=" absolute bg-[url('/image/Hero2/c4.png')] bg-cover bg-center w-[20vw] h-[20vw] right-0 bottom-0" />

        <div className="flex flex-col z-[1] relative top-[8vw] left-[5vw]  duration-1000 ease-in-out">
          <div className={`text-[3vw] ${catSw.nameColor}`}>{catSw.name}</div>
          <div className="w-[40%] text-[1.3vw] text-[#fff]">{catSw.textU}</div>
          <div className="w-[40%] text-[1.3vw] mt-[2vw] text-[#fff]">
            {catSw.textD}
          </div>
        </div>

        <div
          className={` w-[40%] h-[80%] rounded-full absolute right-[-20vw] top-[5vw] rotate-[-0deg] duration-1000 ease-in-out ${catSw.bg}`}
        >
          <Image
            src={"/image/cat/cat1.png"}
            width={1000}
            height={1000}
            alt="cat_1"
            className={`w-[40vw] h-[35vw] ${catSw.cat1} duration-1000 ease-in-out absolute`}
          />
          <Image
            src={"/image/cat/cat2.png"}
            width={1000}
            height={1000}
            alt="cat_1"
            className={`w-[40vw] h-[35vw] ${catSw.cat2} duration-1000 ease-in-out absolute`}
          />
          <Image
            src={"/image/cat/cat3.png"}
            width={1000}
            height={1000}
            alt="cat_1"
            className={`w-[25vw] h-[25vw] ${catSw.cat3} duration-1000 ease-in-out absolute`}
          />
          <Image
            src={"/image/cat/cat4.png"}
            width={1000}
            height={1000}
            alt="cat_1"
            className={`w-[25vw] h-[25vw] ${catSw.cat4} duration-1000 ease-in-out absolute`}
          />
          <Image
            src={"/image/cat/cat5.png"}
            width={1000}
            height={1000}
            alt="cat_1"
            className={`w-[25vw] h-[25vw] ${catSw.cat5} duration-1000 ease-in-out absolute`}
          />
        </div>
      </div>
    </div>
  );
}
