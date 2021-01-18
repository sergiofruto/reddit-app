import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import * as actions from '../actions/index';
import * as actions from '../../actions';

import { Card, CardTop, CardBody, CardBottom, Author} from './style';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  // const [selectedPost, setSelectedPost] = useState([]);
  const handleSelectPost = (e, post) => {
    dispatch(actions.selectPost(post));
  };

  return (
    <Card onClick={(e) => handleSelectPost(e, post)}>
      <CardTop className="card-top">
        <Author>{post.author}</Author>
        <time>18 hours ago</time>
      </CardTop>
      <CardBody className="card-body">
        <img src={post.thumbnail} alt={post.title} />
        <h1>{post.title}</h1>
      </CardBody>
      <CardBottom className="card-bottom">
        <button>Dismiss post</button>
        <span>{post.num_comments} comments</span>
      </CardBottom>
    </Card>
  );
};

export default PostCard;