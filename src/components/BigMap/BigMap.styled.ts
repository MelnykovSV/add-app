import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  margin: 0;
  top: 20px;
  left: 20px;
  z-index: 100;
  font-size: 18px;
  font-weight: 700;
  color: red;
`;
