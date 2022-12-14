import React from 'react'

export default function AddPostForm({id, newPost, setNewPost, onSubmit, onReset}) {

  return (
    <form onSubmit={onSubmit}>
      <label>Title:</label>
      <input
        required
        type="text"
        minLength="2"
        id="title"
        value={newPost && newPost.title}
        onChange={({ target }) => setNewPost({ ...newPost, title: target.value })}
      />
      <br />
      <br />
      <label>Text:</label>
      <input
        required
        type="text"
        maxLength="300"
        id="title"
        value={newPost && newPost.text}
        onChange={({ target }) => setNewPost({ ...newPost, text: target.value })}
      />
      <br />
      <br />
      <div>
         <button type="submit">{id ? 'Edit' : "Add Post"}</button>
      </div>
      <br />
      <div>
        <button type="button" onClick={onReset}>Reset</button>
      </div>
    </form>
  );
}
