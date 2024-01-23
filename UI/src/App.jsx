import { Question } from './components';
import { FilmProvider } from './context';
import { FilmRecommendations } from './features';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <FilmProvider>
          <Question />
          <FilmRecommendations />
      </FilmProvider>
    </ErrorBoundary>
  );
}

export default App;
