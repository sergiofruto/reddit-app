import React from 'react';
import { Card, CardTop, CardBody, CardBottom, Author} from './style';

const PostCard = () => {
  return (
    <Card>
      <CardTop className="card-top">
        <Author>Author</Author>
        <time>18 hours ago</time>
      </CardTop>
      <CardBody className="card-body">
        <img src="https://b.thumbs.redditmedia.com/J59ajm_dSTZDuTLow4sKmfbXLpYGLOt5ycTc0EI2TdI.jpg" alt=""/>
        <h1>Post title</h1>
      </CardBody>
      <CardBottom className="card-bottom">
        <button>Dismiss post</button>
        <span>12983 comments</span>
      </CardBottom>
    </Card>
  );
};

export default PostCard;