import Avathar from "../../assets/images/Man Avatar.png"

export default function LoadingGrid() {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-[50px]">
            {
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => (
                    <div key={"loading"+index} className="w-full flex items-start gap-[25px]">
                        <div className="w-[60px] h-[60px] rounded-full bg-[#667A8A]">
                            
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-[90px] h-[20px] rounded bg-[#667A8A]"></div>
                            <div className="w-full h-[20px] rounded bg-[#667A8A]"></div>
                            <div className="w-[150px] h-[20px] rounded bg-[#667A8A]"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}