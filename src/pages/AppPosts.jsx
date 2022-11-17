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
        await PostsService.delete(id);
        setPosts(posts.filter((post) => post.id !== id));    
    }

  return (
    <div>
        <h2>Posts list:</h2>
        <ul>
            {posts && posts.map((post) => <li key = {post.id}>{post.title}
            <div>
                {post.comments && post.comments.length ? (
                    <span>Comments number: {post.comments.length}</span>
                ) : (
                    <span>No comments</span>
                )}
            </div>
            <Link to={`/posts/${post.id}`}>View Post</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
            )}
        </ul>
    </div>
  )
}