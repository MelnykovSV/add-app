import styled from '@emotion/styled';

export const Wrapper = styled.form``;

export const TextInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  width: 100%;
  padding: 8px;
  outline-color: #2684ff;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const ErrorField = styled.p`
  margin: 0;
  font-size: 12px;
  min-height: 18px;
  margin-bottom: 4px;
  color: red;
`;

export const Button = styled.button`
  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 104, 245, 0.3), 0 0 0 1px rgba(34, 104, 245, 0.3),
        0 0 0 3px rgba(34, 104, 245, 0.3), 0 0 0 5px rgba(34, 104, 245, 0.3);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 104, 245, 0.3), 0 0 0 4px rgba(34, 104, 245, 0.3),
        0 0 0 20px rgba(167, 36, 196, 0), 0 0 0 30px rgba(167, 36, 196, 0);
    }
  }

  cursor: pointer;
  color: #fff;
  background-color: #2684ff;
  display: block;
  text-align: center;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  margin: 0 auto;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #2b71cd;
  }

  &.loading {
    pointer-events: none;
    animation: ripple 1s linear infinite;
    transition: box-shadow 0.7s ease;

    box-shadow: 10px 5px 5px 10px 200, 200;
  }
`;
