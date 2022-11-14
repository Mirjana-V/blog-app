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

    const handleDelete = async(id) => {
        const data = await PostsService.delete(id);
        if (data.count > 0) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    }

  return (
    <div>
        <h2>Posts list:</h2>
        <ul>
            {posts && posts.map((post) => <li key = {post.id}>{post.title}
            <Link to={`/posts/${post.id}`}>View Post</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
            )}
        </ul>
    </div>
  )
}