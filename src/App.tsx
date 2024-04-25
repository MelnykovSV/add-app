import { ModernNormalize } from 'emotion-modern-normalize';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListingsProvider } from './contextProviders/ListingsProvider';
import { BigMap, Header, ErrorFallback } from './components';
import AddCardList from './components/ListingCardList/ListingCardList';
import * as S from './App.styled';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ListingsProvider>
        <S.Wrapper>
          <ModernNormalize />
          <Header />
          <S.Main>
            <BigMap />
            <AddCardList />
          </S.Main>
          <ToastContainer />
        </S.Wrapper>
      </ListingsProvider>
    </ErrorBoundary>
  );
}

export default App;
