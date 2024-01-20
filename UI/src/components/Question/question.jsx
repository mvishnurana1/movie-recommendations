import { useContext } from 'react';
import { filmContext } from '../../context';
import { latest, nintiesCar, retroCar } from '../../assets';
import { formatDateToDDMMYYYY } from '../../helper';

import './question.scss';

function Question({
    buttonClassNames,
    colours,
    colorsQuestion,
    questionBackgroundClassName,
    questionText,
    timelineQuestion,
  }) {

  const {
    setColour,
    fetchRecommendations
  } = useContext(filmContext);

  return <>
    <div className='gl-horizontally-centre'>
      <h2 className='gl-header-level-two'>{questionText}</h2>
    </div>
    {colorsQuestion && <div className={questionBackgroundClassName}>
      <button className={`coloured-buttons-style button-no-native-style`}>
          {colours?.map((color, index) => 
            <div
              className={buttonClassNames}
              key={ index }
              style={{'backgroundColor': `${ color }`}}
              onClick={() => { 
                setColour(color);
              }}
            />
          )}
      </button>
  </div>}

    {timelineQuestion && 
    <div className={questionBackgroundClassName}>
      <div className='car-buttons-layout'>
        <button className='button-no-native-style' onClick={() => {
          fetchRecommendations('1970-01-01', '1950-01-01');
        } 
        }>
          <img className='retroCar' src={ retroCar } alt='retro-card' width={'300px'} />
        </button>

        <button className='button-no-native-style' onClick={() => {
          fetchRecommendations('1980-01-01', '1960-01-01');
        }}>
          <img className='retroCar' src={ nintiesCar } alt='nineties-card' width={'300px'} />
        </button>

        <button className='button-no-native-style' onClick={() => {
          fetchRecommendations(formatDateToDDMMYYYY(new Date()), '1980-01-01');
        }}>
          <img className='retroCar' src={ latest } alt='latest-card' width={'350px'} />
        </button>
      </div>
    </div>}
  </>
}

export default Question;
