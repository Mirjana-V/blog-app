import React from 'react';

export default function AddCommentComponent({comment, setComment, onSubmitComment}) {
  return (
    <div>
    <h3>AddComment:</h3>
    <form>
      <label>Text:</label>
      <input
        required
        type="text"
        id="text"
        value={comment.text}
        onChange={({target}) => setComment({...comment, text: target.value})}
        />
    <br />
    <br />
    <div>
        <button type="submit">Submit comment</button>
    </div>
    </form>
    </div>
  )
}
