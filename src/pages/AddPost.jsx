import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import PostsService from "../services/PostsService";
import AddPostForm from "../components/AddPostForm";

export default function AddPost() {
    const history = useHistory();
    const [newPost, setNewPost] = useState({
        title: '',
        text: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
            PostsService.add(newPost);
        history.push('/posts');
    }
    return <div><h2>Add New Post:</h2>
        <AddPostForm
            newPost={newPost}
            setNewPost={setNewPost}
            onChange={handleSubmit}
         />
    </div>
}