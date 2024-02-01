import { useContext } from 'react';
import { ListingQuestion } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { colorPaletteMap, formatDateToDDMMYYYY } from './helper';
import { latest, nintiesCar, retroCar } from './assets';
import './App.scss';

function App() {
  const {
    colour,
    era,
    fetchRecommendations,
    setColour,
    setLoading,
    culture,
    setCulture,
    setEra,
  } = useContext(filmContext);
  
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
    
  const colours = Object.keys(colorPaletteMap);

  const cinemaCultures = [{
      culture: 'bollywood',
      imgSrc: '',
      width: '200px',
    },
    {
      culture: 'european', 
      imgSrc: '',
      width: '200px',
    },
    { 
      culture: 'hollywood',
      imgSrc: '',
      width: '200px',
    }];

  const noColour = colour === undefined;
  const showEraQuestion = (era.length === 0) && (colour !== undefined);
  const showCultureQuestion = (era.length !== 0) && (colour !== undefined) && (culture === undefined);

  return (
      <>
        {noColour && <ListingQuestion
          handleClick={(chosenColour) => setColour(chosenColour)}
          list={ colours }
          questionContent={'Pick a color that matches your mood now'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
        />}

        {showEraQuestion && <ListingQuestion
          handleClick={(gteTime, lteTime) => setEra([gteTime, lteTime])}
          questionContent={'Pick one of the following'}
          list={ cars }
          elementClass={'car-hover'}
          imgListing
        />}

        {showCultureQuestion && <ListingQuestion
          handleClick={(newCulture) => { setCulture(newCulture); fetchRecommendations(); }}
          list={ cinemaCultures }
          questionContent={'Which cultural landscape intrigues you the most'}
          elementClass={'color-questions-button'}
          buttonLayout={'coloured-buttons-style'}
        />}

        <FilmRecommendations />
      </>
  );
}

export default App;
