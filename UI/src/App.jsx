import { useContext } from 'react';
import { ListingQuestion } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { formatDateToDDMMYYYY } from './helper';
import { latest, nintiesCar, retroCar } from './assets';
import './App.scss';

function App() {
  const {
    colour,
    era,
    fetchRecommendations,
    setColour,
    setLoading,
    includeInternationalFilms,
    setIncludeInternationalFilms,
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
    
  const cinemaCultures = [{
    color: '#5D9C59',
    text: 'Yes',
  }, {
    color: '#DF2E38',
    text: 'No',
  }];

  const colors = [{
    color: '#22092C',
  }, {
    color: '#3E3232',
  }, {
    color: '#872341',
  }, {
    color: '#BE3144',
  }, {
    color: '#F05941',
  }, {
    color: '#F4CE14',
  }];

  const noColour = colour === undefined;
  const showEraQuestion = (era.length === 0) && (colour !== undefined);
  const showCultureQuestion = (era.length !== 0) && (colour !== undefined) && !includeInternationalFilms.set;

  return (
      <>
        {noColour && <ListingQuestion
          handleClick={(chosenColour) => setColour(chosenColour.color)}
          list={ colors }
          questionContent={'Pick a color that matches your mood now'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
        />}

        {showEraQuestion && <ListingQuestion
          handleClick={(era) => {
            setEra([era.gteTime, era.lteTime]); 
          }}
          questionContent={'Pick one of the following'}
          list={ cars }
          elementClass={'car-hover'}
          imgListing
        />}

        {showCultureQuestion && <ListingQuestion
          handleClick={(newCulture) => {
            setIncludeInternationalFilms({
              set: true,
              value: 'Yes',
            });
            fetchRecommendations();
          }}
          list={ cinemaCultures }
          questionContent={'Include International Films'}
          elementClass={'color-questions-button'}
          buttonLayout={'coloured-buttons-style'}
          applyBackGroundColour
        />}

        <FilmRecommendations />
      </>
  );
}

export default App;
