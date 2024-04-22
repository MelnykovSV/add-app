import { AddsProvider } from './contextProviders/AddsProvider';
import BigMap from './components/BigMap/BigMap';
import './App.css';

function App() {
  return (
    <div>
      <AddsProvider>
        <BigMap />
      </AddsProvider>
    </div>
  );
}

export default App;
