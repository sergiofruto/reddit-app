import styled from 'styled-components';

export const MainGrid = styled.main`
  min-height: 100vh;

  @media (min-width: 1024px){
    display: grid;
    grid-template-columns: 360px 1fr;
  }
`;