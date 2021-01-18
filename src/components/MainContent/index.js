import React from 'react';
import { useSelector } from "react-redux";
import { Post, PostAuthor, PostImage, PostTitle } from './style';

const MainContent = () => {
  const selectedPost = useSelector(state => state.reddit.selectedPost);

  return (
    <div>
      <h1>Post Content</h1>
        {(selectedPost === undefined || selectedPost.length === 0) ? 'Select a post to read' : (
          <Post>
            <PostAuthor>{selectedPost.author}</PostAuthor>
            <PostImage src={selectedPost.thumbnail} alt=""/>
            <PostTitle>{selectedPost.title}</PostTitle>
          </Post>
        )}
    </div>
  );
};

export default MainContent;