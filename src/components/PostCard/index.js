import React from 'react';
import { Card, CardTop, CardBody, CardBottom, Author} from './style';

const PostCard = ({ post }) => {
  return (
    <Card>
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