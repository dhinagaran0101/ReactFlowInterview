import axios from "axios"

export const getAxios = async ({
    url
}) => {
    try {

        var response = await axios.get(url);

        if (response.status == 200) {
            return response.data;
        } else {
            return null;
        }

    } catch (err) {
        return null;
    }
}