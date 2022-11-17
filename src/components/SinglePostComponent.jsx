import React from "react";

export default function SinglePostComponent({ title, text, post, formattedDate }) {

    return (<div>
        <h3>Title:{title}</h3>
        <p>Text:{text}</p>
        <p>Created at:{formattedDate}</p>
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