import { useContext, useState } from 'react';
import { Card, Question } from './components';
import { poster } from './assets';
import { filmContext, FilmProvider } from './context';
import { TopFilms } from './features';
import { colorPaletteMap } from '../src/helper';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import './App.scss';

function App() {
  const [colour, setColour] = useState('');
  const [era, setEra] = useState('');

  const labels = new Array(10).fill("");

  return (
    <ErrorBoundary>
      <FilmProvider>
      <div className='App'>
        {/* <h2 className='title'>Movie Recommendation App</h2> */}
        <div className='movies-listing-layout'>
          {
            <Question
              buttonStyle=''
              buttonClassNames='color-questions-button'
              renderChildConent
              setColour={setColour}
              colorsQuestion
              colours={ Object.keys(colorPaletteMap) }
              colour={colour}
              questionText="Pick a color that matches your mood now"
              questionBackgroundClassName='color-question-background'
            />
          }

          {
            <Question
              timelineQuestion={true}
              questionText="Pick one of the following"
              questionBackgroundClassName='cars-question-layout'
              setEra={setEra}
            />
          }
          {labels.map((_value, index) =>
          <>
            {/* <Card
              cardMainClass="movie-card-hover-effect"
              filmInfo={filmInfo}
              filmRating={filmRating}
              imgSrc={poster}
              ImgclassNames='card-main-img'
              key={index}
            />

            <Card
              cardMainClass="movie-card-hover-effect"
              filmInfo={filmInfo}
              filmRating={filmRating}
              imgSrc={'https://image.tmdb.org/t/p/w500/54QOkHWUnn3gDZKfGojPiFqTHJD.jpg'}
              ImgclassNames='card-main-img'
              key={index + 1}
            /> */}
          </>
          )}
        </div>

        <TopFilms />
      </div>
      </FilmProvider>
    </ErrorBoundary>
  );
}

export default App;
