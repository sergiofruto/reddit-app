import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Moment from 'react-moment';
import * as actions from '../../redux/actions';
import CloseIcon from './closeIcon';
import ChevronRightIcon from './chevronRightIcon';
import {
  Card,
  CardInner,
  CardTop,
  CardBody,
  CardBottom,
  Comments,
  Image,
  Author,
  UnreadMarker,
  Time,
  Title,
  DismissButton,
} from './style';

const PostCard = ({ post, postIndex }) => {
  const [unread, setUnread] = useState(true);
  const [animate, setAnimate] = useState(false);
  const readPost = useSelector(state => state.reddit.readPosts);
  const dispatch = useDispatch();

  const handleSelectPost = (post) => {
    //opens the post in the main content
    dispatch(actions.selectPost(post));
    //adds the post to the read list
    dispatch(actions.readPost(post.id));
  };

  const handleDismissPost = (e, postId) => {
    //prevents triggering parent's handleSelectPost
    e.stopPropagation();
    //triggers dissmissAnimation for the card
    setAnimate(true);
    //after animation duration, triggers dismissPost
    setTimeout(() => {
      dispatch(actions.dismissPost(postId))
    }, 400);
  };

  const checkReadStatus = (readPost, postId) => {
    if (readPost.includes(postId)) {
      setUnread(false);
    }
  };

  //when PostCards renders, checks if it was already read
  useEffect(() => checkReadStatus(readPost, post.id), [readPost, post.id]);

  return (
    <Card onClick={(e) => handleSelectPost(post)} unread={unread}>
      <CardInner animate={animate}>
        <CardTop>
          {unread && <UnreadMarker />}
          <Author unread={unread}>
            {post.author}
          </Author>
          <Time>
            <Moment fromNow>{post.created * 1000}</Moment>
          </Time>
        </CardTop>
        <CardBody>
          {post.thumbnail && <Image src={post.thumbnail} alt={post.title} />}
          <Title unread={unread}>{post.title}</Title>
          <ChevronRightIcon />
        </CardBody>
        <CardBottom>
          <DismissButton onClick={(e) => handleDismissPost(e, post.id)}>
            <CloseIcon />
            Dismiss post
          </DismissButton>
          <Comments>{post.num_comments} comments</Comments>
        </CardBottom>
      </CardInner>
    </Card>
  );
};

export default PostCard;