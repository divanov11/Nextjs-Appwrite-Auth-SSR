import { cookies } from "next/headers";
import axios from "axios";

const axiosInstance = async ({ url, method }) => {
    const sessionCookie = cookies().get("session");
    const headers = {
        Cookie: `session=${sessionCookie.value}`,
    };
    return axios({
        url,
        method,
        headers,
    });
};

export default axiosInstance;
