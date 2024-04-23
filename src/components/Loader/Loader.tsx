import { RotatingLines } from 'react-loader-spinner';
import * as S from './Loader.styled';

export default function Loader() {
  return (
    <S.Wrapper>
      <RotatingLines />
    </S.Wrapper>
  );
}
