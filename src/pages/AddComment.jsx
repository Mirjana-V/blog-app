import { useState } from "react";
import PostsService from "../services/PostsService";
import AddCommentComponent from "../components/AddCommentComponent";

export default function AddComment({ postId, addCommentFunction }) {

    const [comment, setComment] = useState({
        text: "",
    });

    const handleAddComment = async (e) => {
        e.preventDefault();
        
        const data = await PostsService.addComment(comment, postId)
        if (data) {
            addCommentFunction(data);
        }
        setComment({ text: '' })
    }

    return (
        <div>
            <AddCommentComponent
                comment={comment}
                setComment={setComment}
                onSubmitComment={handleAddComment}
            />
        </div>)

};