import CardFooter from '../CardFooter/cardFooter';
import { star, blankFilm } from '../../assets';
import './card.scss';

function Card({
    film,
    cardMainClass,
    cardStyles,
    ImgclassNames,
    originalTitle,
    posterPath,
    filmRating,
    children,
    onClick,
}) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const filmInfo = {
        availableOn: ['netflix', 'youtube', 'primeVideos', 'googlePlayMovies']
    };

    return <>
        <div
            onClick={() => onClick(film)}
            className={`card-body ${cardMainClass}`} 
            style={cardStyles}>
            <img 
                alt={`${originalTitle}-poster`}
                className={`${ImgclassNames}`} 
                loading="lazy"
                src={ posterPath ? `${imageBaseUrl}${posterPath}` : `${blankFilm}`}
            />
            <div className='card-footer'>
                {originalTitle && <span className='movie-title'>{ originalTitle }</span>}
            </div>
            <div className='card-footer'>
                <img src={star} alt="" width="12.8px" height="12.8px" />
                <span>{ filmRating.toFixed(1) }</span>
            </div>
            <div className='gl-horizontally-centre'>
                <CardFooter availableOn={filmInfo.availableOn} />
            </div>
            {children}
        </div>
    </>
}

export default Card;
