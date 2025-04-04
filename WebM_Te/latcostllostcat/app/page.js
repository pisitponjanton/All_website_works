import Head from "@/component/Head";
import Hero1 from "@/component/Hero1";
import Hero2 from "@/component/Hero2";
import Hero3 from "@/component/Hero3";

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
