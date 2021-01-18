import React from 'react';
import { useSelector } from "react-redux";

const MainContent = () => {
  const selectedPost = useSelector(state => state.reddit.selectedPost);

  return (
    <div>
      <h1>Post Content</h1>
      <div>
        {(selectedPost === undefined || selectedPost.length === 0) ? 'Select a post to read' : selectedPost.title }
      </div>
    </div>
  );
};

export default MainContent;