import React from 'react';
import { useSelector } from "react-redux";
import { Post, PostAuthor, PostImage, PostTitle, Placeholder } from './style';

const MainContent = () => {
  const selectedPost = useSelector(state => state.reddit.selectedPost);

  return (
    <section>
      {(selectedPost === undefined || selectedPost.length === 0) ? <Placeholder>Select a post to read</Placeholder> : (
          <Post>
            <PostAuthor>{selectedPost.author}</PostAuthor>
            <PostImage src={selectedPost.thumbnail} alt={selectedPost.title}/>
            <PostTitle>{selectedPost.title}</PostTitle>
          </Post>
        )}
    </section>
  );
};

export default MainContent;