import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;

  width: 100%;

  @media screen and (min-width: 1024px) {
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    bottom: 0;
    width: 320px;
    flex-shrink: 0;
    height: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  gap: 10px;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  overflow: hidden;
  padding: 10px;

  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
`;

export const MobileListContainer = styled.div`
  display: block;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;

  height: 100%;

  .swiper {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
