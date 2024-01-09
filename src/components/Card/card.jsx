import { star } from '../../assets';
import CardFooter from '../CardFooter/cardFooter';
import './card.scss';

function Card({ 
    cardMainClass,
    cardStyles,
    ImgclassNames,
    imgSrc,
    filmInfo,
    filmRating,
    children
}) {
    return <>
        <div className={`card-body ${cardMainClass}`} style={cardStyles}>
            { imgSrc && <img className={`${ImgclassNames}`} src={ imgSrc } alt="" /> }
            <div className='card-footer'>
                {filmInfo?.title && <span className='movie-title'>{ filmInfo?.title }</span>}
            </div>
            { filmRating?.imDB_rating && <div className='card-footer'>
                <img src={star} alt="" width="12.8px" height="12.8px" />
                <span>{filmRating.imDB_rating}</span>
            </div> }
            <div>
                {filmInfo?.availableOn.length && 
                    <div className='gl-horizontally-centre'>
                        <CardFooter availableOn={filmInfo?.availableOn} />
                    </div>
                }
            </div>
            {children}
        </div>
    </>
}

export default Card;
