import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: solid 1px #000;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;

  background-color: #fff;
  width: 100%;

  display: flex;

  gap: 10px;
  align-items: center;
`;

export const InfoBlock = styled.div``;

export const ImageContainer = styled.div`
  margin-bottom: 6px;
  display: none;

  width: 150px;
  height: 150px;
  flex-shrink: 0;

  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 864px) {
    display: block;
  }

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

  height: 72px;
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
