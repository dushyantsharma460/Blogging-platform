import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
import { BACKEND_URL } from "../../config";

export interface Blog {
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const blogSelector = selectorFamily<Blog, string>({
    key: "blogSelector",

    get: (id: string) => async () => {

        const response = await axios.get(
            `${BACKEND_URL}/api/v1/blog/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        return response.data.blog;
    }
});

export const blogAtom = atomFamily<Blog, string>({
    key: "blogAtom",

    default: blogSelector
});