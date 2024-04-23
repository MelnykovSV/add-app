import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  height: 160px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    position: relative;
    bottom: 0;
    width: 320px;
    height: 100%;
  }
`;

export const ListContainer = styled.div`
  overflow: hidden;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media screen and (min-width: 1024px) {
      flex-direction: column;
    }
  }
`;
