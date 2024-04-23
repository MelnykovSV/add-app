import { ModernNormalize } from 'emotion-modern-normalize';
import { AddsProvider } from './contextProviders/ListingsProvider';
import BigMap from './components/BigMap/BigMap';
import AddCardList from './components/ListingCardList/ListingCardList';
import * as S from './App.styled';
import './App.css';

function App() {
  return (
    <AddsProvider>
      <S.Wrapper>
        <ModernNormalize />
        <S.Header>
          <p>Searhbar</p>
          <input type="text" />
        </S.Header>
        <S.Main>
          <BigMap />
          <AddCardList />
        </S.Main>
      </S.Wrapper>
    </AddsProvider>
  );
}

export default App;
