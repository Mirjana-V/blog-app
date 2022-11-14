import React, { useState, useEffect } from 'react';
import PostsService from "../services/PostsService";
import { Link } from 'react-router-dom';

export default function AppPosts() {
    const[posts, setPosts] = useState();

    const handleGetPosts = async() => {
        const posts = await PostsService.getAll();
        setPosts(posts);
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

  return (
    <div>
        <h2>Posts list:</h2>
        <ul>
            {posts && posts.map((post) => <li key = {post.id}>{post.title} <Link to={`/posts/${post.id}`}>View Post</Link></li>)}
        </ul>
    </div>
  )
}