import { axiosInstance } from "./AxiosService";

class PostsService{

    async getAll(){
        const response = await axiosInstance.get("/posts");
        return response.data
    }

    async get(id) {
        try {
            const { data } = await axiosInstance.get(`posts/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async add(newPost) {
        try {
            const { data } = await axiosInstance.post('posts', newPost);
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}

export default new PostsService();