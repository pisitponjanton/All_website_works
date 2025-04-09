const Page = ()=>{
    return(
        <div className=" w-screen h-screen bg-register flex flex-col justify-center items-center relative overflow-hidden">
            <div className="w-screen h-[40vw] absolute bottom-0 bg-[url('/image/register/test.png')] bg-cover bg-center"></div>
            <div className="w-[60vw] h-[45vw] bg-[#D9D9D9]/50 z-[5] rounded-3xl flex flex-col p-[3vw]">
                <div className="flex flex-col text-[#0D4E59] relative">
                    <h1 className="text-[5vw]">Hello!</h1>
                    <h2 className="text-[3vw]">Welcome to lat cost</h2>
                    <div className=" absolute top-0 left-[16.5vw] bg-[url('/image/logo.png')] bg-cover bg-center w-[4.5vw] h-[5.5vw]"></div>
                </div>
            </div>
        </div>
    );
}

export default Page;