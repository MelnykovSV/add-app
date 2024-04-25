import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { FaSearch } from 'react-icons/fa';

export const Wrapper = styled.header`
  background-color: rgb(40, 49, 73);
  padding-left: 15px;
  padding-right: 15px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 20px;
  row-gap: 10px;
  align-items: center;
  p {
    margin: 0;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;
    height: 60px;
  }
`;

export const ModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  width: min(calc(100% - 20px), 700px);
  padding: 15px;

  max-height: 90vh;

  overflow-y: auto;

  h2 {
    text-align: center;
  }

  input: {
    z-index: 100;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #13842d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: #085d1c;
  }
`;

export const SearchbarContainer = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: fit-content;
  }
`;

export const Searchbar = styled.input`
  width: 100%;
  padding: 9px 37px 9px 15px;
  border: none;
  border-radius: 4px;
  line-height: 1.5;

  @media screen and (min-width: 480px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const SearchbarIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
`;
