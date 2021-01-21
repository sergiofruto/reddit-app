import styled from 'styled-components';

export const Aside = styled.aside`
  position: relative;
  max-height: 100vh;
  background-color: black;
  color: white;
  overflow: scroll;
  `;

export const Title = styled.h1`
  margin: 0;
  padding: .8rem 0;
  background-color: #1b1b1b;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
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
`;