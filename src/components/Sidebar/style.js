import styled, { css, keyframes } from 'styled-components';

const dismissAllAnimation = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(0); opacity: 0;}
`

export const Aside = styled.aside`
  position: absolute;
  width: 80%;
  max-width: 360px;
  height: 100vh;
  background-color: black;
  color: white;
  transform: translateX(-100%);
  transition: transform .35s ease-out;
  ${props => props.slideIn && css`
    transform: translateX(0);`
  }
  @media (min-width: 1024px){
    position: relative;
    width: initial;
    transform: initial;
  }
`;

export const AsideContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem 0;
  margin: 0;
  background-color: #1b1b1b;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  z-index: 10;
`;

export const PostsList = styled.div`
  min-height: calc(100vh - 49px - 37px);
  transform-origin: top left;
  opacity: 1;
  ${props => props.animate && css`
    animation: ${dismissAllAnimation};
    animation-duration: .45s;
    animation-fill-mode: forwards;`
  }
`;

export const DismissAllButton = styled.button`
  position: sticky; 
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .6rem;
  border: 0;
  background-color: #000000;
  font-size: 0.9rem;
  color: orange;
  cursor: pointer;
  outline: none;
`;