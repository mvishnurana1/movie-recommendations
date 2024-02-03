import './listingQuestion.scss';

function ListQuestion({
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
              {list.map((choice, index) => <button
                key={ index }
                onClick={() => handleClick(choice)}
                style={{backgroundColor: applyBackGroundColour ? `${ choice.color }` : ''}}
                className={'button-no-native-style '+ elementClass}>
                 {imgListing && <img 
                    width={choice.width}
                    src={choice.imgSrc}
                    alt={choice.alt}
                  />}
              </button>
              )}
          </div>
        </div>
    </div>
  </>
}

export default ListQuestion;
