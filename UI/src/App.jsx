import { Question } from './components';
import { FilmProvider } from './context';
import { FilmRecommendations, TopFilms } from './features';
import { colorPaletteMap, } from '../src/helper';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <FilmProvider>
      <div className='App'>
        {/* <h2 className='title'>Movie Recommendation App</h2> */}
        <div className='movies-listing-layout'>
          {<Question
              buttonStyle=''
              buttonClassNames='color-questions-button'
              renderChildConent
              colorsQuestion
              colours={ Object.keys(colorPaletteMap) }
              questionText="Pick a color that matches your mood now"
              questionBackgroundClassName='color-question-background'
            />
          }

          {<Question
              timelineQuestion={true}
              questionText="Pick one of the following"
              questionBackgroundClassName='cars-question-layout'
            />
          }
        </div>

        <TopFilms />
        <FilmRecommendations />
      </div>
      </FilmProvider>
    </ErrorBoundary>
  );
}

export default App;
