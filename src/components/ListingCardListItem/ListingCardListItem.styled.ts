import styled from '@emotion/styled';

export const Wrapper = styled.li`
  border: solid 1px #000;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;

  background-color: #fff;

  width: 100%;
  transition: transform 0.3s linear, box-shadow 0.3s linear;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  margin-bottom: 6px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  max-width: 280px;
  margin: 0;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 6px;
  max-height: 72px;

  overflow-y: auto;
`;

export const Address = styled.p`
  margin: 0;
  margin-bottom: 6px;
  font-weight: 600;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 700;
`;
