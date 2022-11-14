import React from 'react'

export default function AddPostForm({newPost, setNewPost, onChange}) {

  return (
    <form onSubmit={onChange}>
      <label>Title:</label>
      <input
        required
        type="text"
        id="title"
        value={newPost.title}
        onChange={({ target }) => setNewPost({ ...newPost, title: target.value })
                        }
      />
      <br />
      <br />
      <label>Text:</label>
      <input
        required
        type="text"
        id="title"
        value={newPost.text}
        onChange={({ target }) => setNewPost({ ...newPost, text: target.value })
                        }
      />
      <br />
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
