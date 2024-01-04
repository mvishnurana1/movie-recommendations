import { star } from '../../assets';
import CardFooter from '../CardFooter/cardFooter';
import img from './kal-ho-naa-ho.webp';
import './card.scss';

function Card({ hideFooter }) {
    return <>
        <div className='card-body'>
            <img className='card-main-img' src={img} alt="" />
            <div className='flex'>
                <img src={star} alt="" width="12.8px" height="12.8px" />
                <span>7.8</span>
            </div>
            {!hideFooter && (<div className='card-footer'>
                <span className='movie-title'>Kal Ho Naa Ho</span>
                <div className='centre'>
                    <CardFooter />
                </div>
            </div>)}
        </div>
    </>
}

export default Card;
