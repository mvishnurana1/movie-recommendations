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
    onClick,
}) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    return <>
        <div
            onClick={() => onClick(film)}
            className={`card-body ${cardMainClass}`} 
            style={cardStyles}>
            <img 
                alt={`${originalTitle}-poster`}
                className={`${ImgclassNames}`} 
                src={ posterPath ? `${imageBaseUrl}${posterPath}` : `${blankFilm}`}
            />
            <div style={{ margin: '0 10px' }}>
                {originalTitle && <span className='movie-title' title={ originalTitle }>{ originalTitle }</span>}
            </div>

            <div className='card-footer'>
                <span>{ filmRating?.toFixed(1) }</span>
                <img src={star} alt="" width="12.8px" height="12.8px" />
            </div>
        </div>
    </>
}

export default Card;
