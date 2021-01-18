import React from 'react';
import PostCard from '../PostCard';
import { Aside, Title } from './style';

const Sidebar = ({ posts }) => {
  return (
    <Aside>
      <Title>Reddit Posts</Title>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.data.id} post={post.data} />
        ))}
      </div>
    </Aside>
  );
};

export default Sidebar;