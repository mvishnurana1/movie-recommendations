import './question.scss';

function Question({
  elementClass,
  list,
  questionContent,
  handleClick,
  applyBackGroundColour,
  buttonLayout,
  imgListing
}) {
  return <>
    <div className={'vertically-center'}>
      <div className='gl-horizontally-centre'>
        <h2 className='gl-header-level-two'>{ questionContent }</h2>
      </div>
        <div className='gl-horizontally-centre'>
          <div className={`${buttonLayout} options-listing`}>
                {imgListing ? list.map((choice, index) =>
                <button
                  key={ index }
                  className={'button-no-native-style '+ elementClass}>
                    <img 
                      width={choice.width}
                      src={choice.imgSrc}
                      alt={choice.alt}
                      onClick={() => handleClick(choice.gteTime, choice.lteTime)}
                    />
                </button>
                ) : list?.map((choice, index) => 
                  <button
                    className={elementClass}
                    key={ index }
                    style={{backgroundColor: applyBackGroundColour ? `${ choice }` : ''}}
                    onClick={() => handleClick(choice)}
                  />
                )}
          </div>
        </div>
    </div>
  </>
}

export default Question;
