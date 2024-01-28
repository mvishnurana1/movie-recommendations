import { useContext } from 'react';
import { Question } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { colorPaletteMap, formatDateToDDMMYYYY } from './helper';
import { latest, nintiesCar, retroCar } from './assets';
import './App.scss';

function App() {
  const colours = Object.keys(colorPaletteMap);

  const {
    colour,
    era,
    fetchRecommendations,
    setColour,
    setLoading,
  } = useContext(filmContext);

  function fetchRecommendationsForUser(gteTime, lteTime) {
    setLoading(true);
    fetchRecommendations(gteTime, lteTime);
  }

  const cars = [
  {
    alt:'retro-car',
    gteTime: '1970-01-01',
    imgSrc: retroCar,
    lteTime: '1950-01-01',
    width: '200px',
  }, 
  {
    alt:'ninties-car',
    gteTime: '1980-01-01',
    imgSrc: nintiesCar,
    lteTime: '1960-01-01',
    width: '200px',
  },  
  {
    alt:'latest-car',
    gteTime: formatDateToDDMMYYYY(new Date()),
    imgSrc: latest,
    lteTime: '1980-01-01',
    width: '200px',
  }];

  return (
      <>
        {(colour === undefined) && <Question
          handleClick={(chosenColour) => setColour(chosenColour)}
          list={ colours }
          questionContent={'Pick a color that matches your mood now'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
        />}

        {(era.length === 0) && (colour !== undefined) && <Question
          handleClick={(gteTime, lteTime) => fetchRecommendationsForUser(gteTime, lteTime)}
          questionContent={'Pick one of the following'}
          list={ cars }
          elementClass={'car-hover'}
          imgListing
        />}
        <FilmRecommendations />
      </>
  );
}

export default App;
