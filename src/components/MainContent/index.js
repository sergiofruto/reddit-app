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
          {selectedPost.thumbnail && <PostImage src={selectedPost.thumbnail} alt={selectedPost.title}/>}
          {/* {selectedPost.preview.images && <PostImage src={selectedPost.preview.images[0].source.url} alt={selectedPost.title} />} */}
          <PostTitle>{selectedPost.title}</PostTitle>
        </Post>
      )}
    </section>
  );
};

export default MainContent;