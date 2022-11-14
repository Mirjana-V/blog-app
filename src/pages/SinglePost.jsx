import React, {useState} from "react";
import { useParams } from "react-router-dom";
import PostsService from "../services/PostsService";
import SinglePostComponent from "../components/SinglePostComponent";
import { useEffect } from "react";

export default function SinglePost() {

    const{id} = useParams();
    const[post, setPost] = useState({});

    useEffect(() => {
        const handleGetId = async () => {
            const post = await PostsService.get(id)
            setPost(post)
        }
        handleGetId();
    }, [id])

  return (
    <div>
        <SinglePostComponent
            key={post.id}
            title={post.title}
            text={post.text}
            />
    </div>
  )
}
