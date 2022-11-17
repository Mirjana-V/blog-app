import { axiosInstance } from "./AxiosService";

class PostsService{

    async getAll(){
        const response = await axiosInstance.get("/posts");
        return response.data
    }

    async get(id) {
        try {
            const {data} = await axiosInstance.get(`posts/${id}?filter={"include":["comments"]}`);
            return data;
        } catch (error) {
            console.log(error);
        }
        
    }

    async add(newPost) {
        try {
            const { data } = await axiosInstance.post('/posts', newPost);
            return data;
        } catch (error) {
            console.log(error);
        }
        
    }

    async edit(id, newPost) {
        try {
            const { data } = await axiosInstance.put(`posts/${id}`, newPost);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const { data } = await axiosInstance.delete(`posts/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async addComment(comment, postId) {
        try {
            const { data } = await axiosInstance.post(`posts/${postId}/comments`, comment);
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}

export default new PostsService();