import { useContext, useState } from 'react';
import { filmContext } from '../../context';
import { latest, nintiesCar, retroCar } from '../../assets';
import { colorPaletteMap, formatDateToDDMMYYYY } from '../../helper';
import './question.scss';

function Question() {
  const colours = Object.keys(colorPaletteMap);

  const {
    setColour,
    fetchRecommendations,
    colour,
  } = useContext(filmContext);

  const [clicked, setClicked] = useState(false);

  function fetchRecommendationsForUser(gteTime, lteTime) {
    setClicked(true);
    fetchRecommendations(gteTime, lteTime);
  }

  return <>
    <div className={colour ? 'hide': 'vertically-center'}>
      <div className='gl-horizontally-centre'>
        <h2 className='gl-header-level-two'>Pick a color that matches your mood now</h2>
      </div>
        <div className='gl-horizontally-centre'>
          <button className={`coloured-buttons-style button-no-native-style gl-horizontally-centre`}>
                {colours?.map((color, index) => 
                  <div
                  className='color-questions-button'
                  key={ index }
                  style={{'backgroundColor': `${ color }`}}
                  onClick={() => setColour(color)} />
                  )}
          </button>
        </div>
    </div>
    
    <div className={clicked || colour === undefined ? 'hide': 'vertically-center'}>
        <div className='gl-horizontally-centre'>
            <h2 className='gl-header-level-two'>Pick one of the following</h2>
        </div>
        <div className='cars-question-layout'>
          <div className='car-buttons-layout'>
            <button className='button-no-native-style' onClick={() => fetchRecommendationsForUser('1970-01-01', '1950-01-01')}>
              <img className='retroCar' src={ retroCar } alt='retro-card' width={'300px'} />
            </button>

            <button className='button-no-native-style' onClick={() => fetchRecommendationsForUser('1980-01-01', '1960-01-01')}>
              <img className='retroCar' src={ nintiesCar } alt='nineties-card' width={'300px'} />
            </button>

            <button className='button-no-native-style' onClick={() => fetchRecommendationsForUser(formatDateToDDMMYYYY(new Date()), '1980-01-01')}>
              <img className='retroCar' src={ latest } alt='latest-card' width={'350px'} />
            </button>
          </div>
        </div>
    </div>
  </>
}

export default Question;
