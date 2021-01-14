import React from 'react';
import PostCard from '../PostCard';
import { Aside, Title } from './style';

const Sidebar = () => {
  return (
    <Aside>
      <Title>Reddit Posts</Title>
      <div className="post-list">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </Aside>
  );
};

export default Sidebar;