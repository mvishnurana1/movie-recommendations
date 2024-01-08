import './question.scss';

function Question({
  colors,
  questionBackgroundClassName,
  questionText,
  // childrenLayout,
  buttonStyle,
  buttonClassNames,
  childStyle,
  childConent,
  chosenColour,
  renderChildConent
  }) {
  return (<div className={questionBackgroundClassName}>
    <h2 style={{'color': 'white'}}>{questionText}</h2>
      <button
        className={`coloured-buttons-style button-no-native-style`}>
          {colors.map((color, index) => 
            <div
              className={buttonClassNames}
              key={ index }
              style={{'backgroundColor': `${ color }`}}
              onClick={() => chosenColour(color)}>
            {renderChildConent ? <span> </span> : null}
            </div>
          )}
      </button>
  </div>)
}

export default Question;
