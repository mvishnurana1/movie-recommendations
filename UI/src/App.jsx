import { Question } from './components';
import { FilmProvider } from './context';
import { FilmRecommendations, TopFilms } from './features';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <FilmProvider>
      <div className='App'>
        {/* <h2 className='title'>Movie Recommendation App</h2> */}
        <Question />
        <FilmRecommendations />
        <TopFilms />
      </div>
      </FilmProvider>
    </ErrorBoundary>
  );
}

export default App;
