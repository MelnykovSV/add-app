import styled from '@emotion/styled';

export const Wrapper = styled.li`
  border: solid 1px #000;
  border-radius: 10px;
  padding: 8px;

  background-color: #fff;

  width: calc(100vw - 20px);
  p {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: calc((100vw - 30px) / 2);
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
