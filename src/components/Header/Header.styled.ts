import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const Wrapper = styled.header`
  background-color: rgb(40, 49, 73);
  height: 60px;
  p {
    margin: 0;
  }
`;

export const ModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #fff;
  border: 2px solid #000;
  width: min(calc(100% - 20px), 700px);
  padding: 15px;

  h2 {
    text-align: center;
  }

  input: {
    z-index: 100;
  }
`;
