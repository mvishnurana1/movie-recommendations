import { star } from '../../assets';
import CardFooter from '../CardFooter/cardFooter';
import './card.scss';

function Card({ 
    cardMainClass,
    cardStyles,
    ImgclassNames,
    imgSrc,
    filmInfo,
    filmRating
}) {
    return <>
        <div className={`card-body ${cardMainClass}`} style={cardStyles}>
            { imgSrc && <img className={`${ImgclassNames}`} src={ imgSrc } alt="" /> }
            { filmRating?.imDB_rating && <div className='flex'>
                <img src={star} alt="" width="12.8px" height="12.8px" />
                <span>{filmRating.imDB_rating}</span>
            </div> }
            <div className='card-footer'>
                {filmInfo?.title && <span className='movie-title'>{ filmInfo?.title }</span>}
                {filmInfo?.availableOn.length && <div className='centre'>
                    <CardFooter availableOn={filmInfo?.availableOn} />
                </div>}
            </div>
        </div>
    </>
}

export default Card;
