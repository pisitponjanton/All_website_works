import Link from "next/link";

const Page = ()=>{
    return(
        <div className=" w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-[5vw]">Coming soon...</h1>
            <Link href={"/"} className="text-[3vw] underline">Back Home</Link>
        </div>
    );
}

export default Page;