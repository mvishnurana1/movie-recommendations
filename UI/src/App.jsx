import { useContext, useEffect, useState } from 'react';
import { ConciseFilmList, ListingQuestion } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { cars, cinemaCultures, colors, likeColorPallets } from './helper';
import { close, eyes } from './assets';
import { HomePage } from './pages';
import './App.scss';

function App() {
  const [ visitedList, setVisitedList ] = useState(false);

  const {
    colour,
    currentDisplay,
    seen,
    fetchRecommendations,
    setColour,
    setIncludeInternationalFilms,
    setEra,
    setCurrentDisplay,
  } = useContext(filmContext);

  const showConciseFilmList = visitedList && (seen.length > 0);

  let coloursMapList = [];
  const specificColours = likeColorPallets[colour];

  if (colour && specificColours) {
    let specifics = specificColours?.map((value) => {
      return {
        'color': value
      }
    });
    
    const coloursObj = [...specifics];
    coloursMapList = coloursObj;
  }

  const displayFabButton = (
    (currentDisplay === 'recommendations') ||
    (currentDisplay === 'era-question') ||
    (currentDisplay === 'culture-question') ||
    (currentDisplay === 'specific-colour-question') ||
    (currentDisplay === 'colour-question'));

  return (
      <>
        {(currentDisplay === 'get-started') && <HomePage />}

        {(currentDisplay === 'colour-question') && <ListingQuestion
          handleClick={(chosenColour) => {
            setColour(chosenColour.color);
            setCurrentDisplay('era-question');
          }}
          list={ colors }
          questionContent={'Pick a colour that matches your mood now'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
        />}

        {(currentDisplay === 'era-question') && <ListingQuestion
            handleClick={(era) => {
              setEra([era.gteTime, era.lteTime]);
              setCurrentDisplay('culture-question');
            }}
            questionContent={'Choose one for the era of movies'}
            list={ cars }
            elementClass={'car-hover'}
            imgListing
          />
        }

        {(currentDisplay === 'culture-question') && <ListingQuestion
          handleClick={(newCulture) => {
            setIncludeInternationalFilms({
              set: true,
              value: 'Yes',
            });
            setCurrentDisplay('specific-colour-question');
          }}
          list={ cinemaCultures }
          questionContent={'Are you open to watching international films (dubbed in English)'}
          elementClass={'color-questions-button'}
          buttonLayout={'coloured-buttons-style'}
          applyBackGroundColour
        />}
        
        {(currentDisplay === 'specific-colour-question') && <ListingQuestion
          handleClick={(chosenColour) => {
            setColour(chosenColour.color);
            setCurrentDisplay('recommendations');
            fetchRecommendations();
          }}
          list={ coloursMapList }
          questionContent={'Let\'s pick a more specific mood colour'}
          elementClass={'color-questions-button'}
          applyBackGroundColour
          buttonLayout={'coloured-buttons-style'}
        />}

        {(currentDisplay === 'recommendations') && <FilmRecommendations />}

        {showConciseFilmList && <div className='visited-movies-container'>
            <ConciseFilmList setVisitedList={setVisitedList} />
        </div>}

        {(seen.length > 0) && displayFabButton &&
          <button className='button-no-native-style' onClick={() => setVisitedList(!visitedList) }>
            <div className='fab-button-so-far'>
              <img alt={ visitedList ? 'close-icon' : 'eye-icon' } width='30px' src={ visitedList ? close : eyes } />
            </div>
            
            {!visitedList && <div className='fab-button-so-far-notifications notification'>
              {seen.length}
            </div>}
          </button>}
      </>
  );
}

export default App;
