import { ModernNormalize } from 'emotion-modern-normalize';
import { ListingsProvider } from './contextProviders/ListingsProvider';
import { BigMap, Header } from './components';
import AddCardList from './components/ListingCardList/ListingCardList';
import * as S from './App.styled';

function App() {
  return (
    <ListingsProvider>
      <S.Wrapper>
        <ModernNormalize />
        <Header />
        <S.Main>
          <BigMap />
          <AddCardList />
        </S.Main>
      </S.Wrapper>
    </ListingsProvider>
  );
}

export default App;
