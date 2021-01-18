import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PostCard from '../PostCard';
import { Aside, Title } from './style';
import { fetchTopPosts } from '../../actions'

const Sidebar = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.reddit.posts);

  useEffect(() => dispatch(fetchTopPosts()), [dispatch]);

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