import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background-color: rgb(40, 49, 73);
  height: 60px;
  p {
    margin: 0;
  }
`;

export const Main = styled.main`
  height: calc(100% - 60px);

  display: flex;
  position: relative;
`;
