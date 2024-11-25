import { useEffect, useState } from "react";
import { getAxios } from "../../service/axiosservice";
import { postEndPoint } from "../../service/endpoints";
import LoadingGrid from "./LoadingGrid";
import DataGrid from "./DataGrid";

export default function Posts() {

    const [postList, setPostList] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        let response = await getAxios({
            url: postEndPoint
        })

        if (response != null) {
            setPostList(response);
        } else {
            setPostList([]);
        }
        setIsLoading(false);
    }

    return (
        <div className="bg-primary w-full p-[25px] my-[25px]">
            {
                isLoading ? <LoadingGrid /> : <DataGrid dataList={postList} />
            }
        </div>
    );
}