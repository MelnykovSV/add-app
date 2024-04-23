import styled from '@emotion/styled';

export const Wrapper = styled.div`
  overflow: hidden;

  position: absolute;

  bottom: 20px;

  height: 160px;

  width: 100%;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    position: static;
    width: 320px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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
