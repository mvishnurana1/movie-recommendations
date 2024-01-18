import { useState } from 'react';
import { Question } from './components';
import { FilmProvider } from './context';
import { TopFilms } from './features';
import { colorPaletteMap, coloursTofilm, genres } from '../src/helper';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import './App.scss';

function App() {
  const [colour, setColour] = useState('');
  const [era, setEra] = useState('');

  const labels = new Array(10).fill("");

  function filmsGenre(colour) {
    const colourString = (colorPaletteMap[colour]);

    computeGenreCode(coloursTofilm[colourString]);
    return coloursTofilm[colourString];
  }

  function computeGenreCode(generesFound) {
    const list = 
      generesFound.map(genreName => genres.filter(g => genreName === g.name)).flat(1);
    
    const codes = list.map(co => co.id);
    return codes;
  }

  return (
    <ErrorBoundary>
      <FilmProvider>
      <div className='App'>
        {/* <h2 className='title'>Movie Recommendation App</h2> */}
        <div className='movies-listing-layout'>
          {(colour === '') &&
            <Question
              buttonStyle=''
              buttonClassNames='color-questions-button'
              renderChildConent
              setColour={setColour}
              colorsQuestion
              colours={ Object.keys(colorPaletteMap) }
              colour={colour}
              filmsGenre={filmsGenre}
              questionText="Pick a color that matches your mood now"
              questionBackgroundClassName='color-question-background'
            />
          }

          {(era === '') &&
            <Question
              timelineQuestion={true}
              questionText="Pick one of the following"
              questionBackgroundClassName='cars-question-layout'
              setEra={setEra}
            />
          }
        </div>

        <TopFilms />
      </div>
      </FilmProvider>
    </ErrorBoundary>
  );
}

export default App;
