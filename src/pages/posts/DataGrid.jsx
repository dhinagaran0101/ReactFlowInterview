import Avathar from "../../assets/images/Man Avatar.png"

export default function DataGrid({
    dataList
}) {

    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-[50px]">
            {
                dataList.map((item, index) => (
                    <div className="flex gap-[20px] items-center" key={"loading"+index}>
                        <div className="min-w-[60px] min-h-[60px] rounded-full bg-hightlight">
                            <img src={Avathar} />
                        </div>
                        <div className="text-highlight">
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}