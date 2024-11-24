import About from "./maincomponent/About";
import Contact from "./maincomponent/Contact";
import Hero1 from "./maincomponent/Hero1";

export default function Home() {
  return (
    <div className="bg-Hero1bg-1 w-screen">
      <Hero1/>
      <About/>
      <Contact/>
    </div>
  );
}
