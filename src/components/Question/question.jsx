import { latest, nintiesCar, retroCar } from '../../assets';
import './question.scss';

function Question({
  colours,
  questionBackgroundClassName,
  questionText,
  // childrenLayout,
  buttonStyle,
  buttonClassNames,
  childStyle,
  childConent,
  colorsQuestion,
  setColour,
  renderChildConent,
  timelineQuestion,
  setEra
  }) {
  return <>
    {colorsQuestion && <div className={questionBackgroundClassName}>
    <h2 style={{'color': 'white'}}>{questionText}</h2>
      <button className={`coloured-buttons-style button-no-native-style`}>
          {colours?.map((color, index) => 
            <div
              className={buttonClassNames}
              key={ index }
              style={{'backgroundColor': `${ color }`}}
              onClick={() => setColour(color)}>
            {renderChildConent ? <span> </span> : null}
            </div>
          )}
      </button>
  </div>}

    {timelineQuestion && 
    <div className={questionBackgroundClassName}>
      <h2 style={{'color': 'white'}}>{questionText}</h2>
      <div className='car-buttons-layout'>
        <button className='button-no-native-style' onClick={() => setEra('50-70')}>
          <img className='retroCar' src={ retroCar } alt='retro-card' width={'300px'} />
        </button>

        <button className='button-no-native-style' onClick={() => setEra('70-90')}>
          <img className='retroCar' src={ nintiesCar } alt='nineties-card' width={'300px'} />
        </button>

        <button className='button-no-native-style' onClick={() => setEra('latest')}>
          <img className='retroCar' src={ latest } alt='latest-card' width={'350px'} />
        </button>
      </div>
    </div>}
  </>
}

export default Question;
