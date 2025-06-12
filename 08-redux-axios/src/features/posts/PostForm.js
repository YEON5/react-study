import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); // 추가
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setTitle(''); 
    setBody(''); // 추가
  };

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="제목 입력" />
        <br/><br/>
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="내용 입력" />
        <br/><br/>
        <button type="submit">작성</button>
    </form>
  );
}

export default PostForm;