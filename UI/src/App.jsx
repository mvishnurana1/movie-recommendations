import { useContext } from 'react';
import { ListingQuestion } from './components';
import { filmContext } from './context';
import { FilmRecommendations } from './features';
import { 
  colorPaletteMap, coloursTofilm, likeColorPallets,
  cars, cinemaCultures, colors } from './helper';
import { eyes } from './assets';
import { HomePage } from './pages';
import './App.scss';

function App() {
  const {
    colour,
    fetchRecommendations,
    setColour,
    setIncludeInternationalFilms,
    setEra,
    currentDisplay,
    setCurrentDisplay,
    seen,
  } = useContext(filmContext);

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

  let filmGenre, filmGenres;

  if (colour && (currentDisplay === 'era-question')) {
    let colourName = colorPaletteMap[colour];
    filmGenre = coloursTofilm[colourName];

    filmGenres = filmGenre.map(x => x + '').join(' & ');
  }

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
            questionContent={'Choose one for the Era movies'}
            list={ cars }
            elementClass={'car-hover'}
            imgListing
            promptMessage={'Okay! So you\'re feeling like '+ filmGenres}
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
          questionContent={'Include International Films'}
          elementClass={'color-questions-button'}
          buttonLayout={'coloured-buttons-style'}
          promptMessage={'Well, that\'s cool!'}
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
          promptMessage={'Okay, Last One!'}
        />}

        {(currentDisplay === 'recommendations') && <FilmRecommendations />}

        {(seen.length > 0) &&
          <div>
            <button className='fab-button-so-far'>
              <img 
                width='30px'
                src={ eyes }
                onClick={() =>
                  console.log('Clicked: ')
                }
                alt='eye-icon'
              />
            </button>
            
            <div className='fab-button-so-far-notifications'>
              {seen.length}
            </div>
          </div>}
      </>
  );
}

export default App;
