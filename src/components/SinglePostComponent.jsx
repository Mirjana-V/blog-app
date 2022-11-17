import React from "react";

export default function SinglePostComponent({ title, text, post }) {

    return (<div>
        <h3>Title:{title}</h3>
        <p>Text:{text}</p>
        <h4>Comments:</h4>
        {post.comments && post.comments.length ? (
            <ul>
                {post.comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        ) : ( <p>No comments</p> )}
    </div>);
}