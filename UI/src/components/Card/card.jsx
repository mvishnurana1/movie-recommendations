import CardFooter from '../CardFooter/cardFooter';
import { star } from '../../assets';
import './card.scss';

function Card({ 
    cardMainClass,
    cardStyles,
    ImgclassNames,
    originalTitle,
    posterPath,
    filmRating,
    children
}) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

    const filmInfo = {
        availableOn: ['netflix', 'youtube', 'primeVideos', 'googlePlayMovies']
      }

    return <>
        <div className={`card-body ${cardMainClass}`} style={cardStyles}>
            { posterPath && <img className={`${ImgclassNames}`} src={`${imageBaseUrl}${posterPath}`} alt="" /> }
            <div className='card-footer'>
                {originalTitle && <span className='movie-title'>{ originalTitle }</span>}
            </div>
            <div className='card-footer'>
                <img src={star} alt="" width="12.8px" height="12.8px" />
                <span>{ filmRating.toFixed(1) }</span>
            </div>
            <div>
                <div className='gl-horizontally-centre'>
                    <CardFooter availableOn={filmInfo.availableOn} />
                </div>
            </div>
            {children}
        </div>
    </>
}

export default Card;
