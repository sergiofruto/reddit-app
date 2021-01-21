import styled from 'styled-components';

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

export const PostAuthor = styled.h1`
  margin: 0 0 32px;
  text-align: center;
`;

export const PostImage = styled.img`
  max-width: 100%;
  margin: 0 auto 32px;
`;

export const PostTitle = styled.h2`
  margin: 0 0 8px;
  text-align: center;
`;

export const Placeholder = styled.span`
  display: block;
  padding-top: 2rem;
  text-align: center;
`;

