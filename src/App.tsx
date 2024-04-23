import { ModernNormalize } from 'emotion-modern-normalize';
import { ListingsProvider } from './contextProviders/ListingsProvider';
import BigMap from './components/BigMap/BigMap';
import AddCardList from './components/ListingCardList/ListingCardList';
import * as S from './App.styled';
import './App.css';

function App() {
  return (
    <ListingsProvider>
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
    </ListingsProvider>
  );
}

export default App;
