import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  height: calc(100% - 112px);
  display: flex;
  position: relative;
  @media screen and (min-width: 480px) {
    height: calc(100% - 60px);
  }
`;
