
import Shop from "./component/shop";

export default function Home() {
  return (
    <div className={`flex justify-center items-center flex-col`}>
      <Shop data={[1,2,4,5,6,7]}/>
      <Shop data={[8,9,10,11,12]}/>
      <Shop data={[31]}/>
    </div>
  );
}
