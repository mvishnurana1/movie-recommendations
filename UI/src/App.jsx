import { useContext } from 'react';
import { ListingQuestion } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { 
  colorPaletteMap,
  coloursTofilm,
  formatDateToDDMMYYYY,
  likeColorPallets,
  likeColorsFilms
} from './helper';
import {
  latest,
  nintiesCar,
  retroCar,
} from './assets';
import { HomePage } from './pages';
import './App.scss';

function App() {
  const {
    colour,
    era,
    fetchRecommendations,
    setColour,
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

  let colors = [{
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

  const showColourQuestion = colour === undefined;
  const showEraQuestion = (era.length === 0) && !showColourQuestion;
  const showCultureQuestion = (!showEraQuestion) && (!showColourQuestion) && !includeInternationalFilms.set;

  let konHai = [];
  const specificColours = likeColorPallets[colour];

  const showSpecificColourQuestion = (era.length !== 0) 
                                  && colour
                                  && specificColours
                                  && includeInternationalFilms.set
                                  && !showCultureQuestion;

  if (colour && specificColours) {
    let specifics = specificColours?.map((value) => {
      return {
        ['color']: value
      }
    });
    
    const noColour = [...specifics];
    
    konHai = noColour;
  }

  let filmGenre, filmGenres;

  if (colour && showEraQuestion) {
    let colourName = colorPaletteMap[colour];

    filmGenre = coloursTofilm[colourName]

    filmGenres = filmGenre.map(x => x + '').join(' & ');
  }

  return (
      <>
        <HomePage />

        {showColourQuestion && <ListingQuestion
          handleClick={(chosenColour) => setColour(chosenColour.color)}
          list={ colors }
          questionContent={'Pick a colour that matches your mood now'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
          />}

        {showEraQuestion && <ListingQuestion
            handleClick={(era) => {
              setEra([era.gteTime, era.lteTime]); 
            }}
            questionContent={'Choose one for the Era movies'}
            list={ cars }
            elementClass={'car-hover'}
            imgListing
            promptMessage={'Okay! So you\'re feeling like '+ filmGenres}
          />
        }

        {showCultureQuestion && <ListingQuestion
          handleClick={(newCulture) => {
            setIncludeInternationalFilms({
              set: true,
              value: 'Yes',
            });
          }}
          list={ cinemaCultures }
          questionContent={'Include International Films'}
          elementClass={'color-questions-button'}
          buttonLayout={'coloured-buttons-style'}
          promptMessage={'Well, that\s cool!'}
          applyBackGroundColour
        />}
        
        {showSpecificColourQuestion && <ListingQuestion
          handleClick={(chosenColour) => {
            setColour(chosenColour.color);
            fetchRecommendations(); 
          }}
          list={ konHai }
          questionContent={'Let\'s pick a more specific mood colour'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
          promptMessage={'Okay, Last One!'}
        />}

        <FilmRecommendations />
      </>
  );
}

export default App;
