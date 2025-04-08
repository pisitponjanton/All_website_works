import Head from "@/component_landdingpage/Head";
import Hero1 from "@/component_landdingpage/Hero1";
import Hero2 from "@/component_landdingpage/Hero2";
import Hero3 from "@/component_landdingpage/Hero3";

export default function Home() {
  return (
    <div className=" w-screen relative overflow-hidden">
      <Head />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}
