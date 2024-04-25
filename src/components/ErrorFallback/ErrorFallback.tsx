import * as S from './ErrorFallback.styled';

interface IErrorFallbackProps {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}

export default function ErrorFallback({ error, resetErrorBoundary }: IErrorFallbackProps) {
  return (
    <S.Wrapper>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>

      <button
        type="button"
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        Try again
      </button>
    </S.Wrapper>
  );
}
