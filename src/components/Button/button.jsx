import React from 'react';
import {
    amazon,
    googlePlay,
    netflix,
    youtube
} from '../../assets';
import './button.scss';

function Button({
    classNames,
    children,
    netflixButton,
    primeButton,
    googlePlayButton,
    youtubeButton,
}) {
    return <button className={`button ${classNames}`} 
            title={`${netflixButton ?? primeButton ?? googlePlayButton ?? youtubeButton ?? 'button'}`}>

            <div className='button-layout'>
                {netflixButton && <div>
                    <a href="https://www.netflix.com/" title='netflix' target='_blank' rel="noreferrer">
                        <img className='icon' src={ netflix } alt="Netflix" title="Netflix" />
                    </a>
                </div>}
                {primeButton && <div>
                    <a href="https://www.primevideo.com/" title='netflix' target='_blank' rel="noreferrer">
                        <img className='round icon' src={ amazon } alt="Prime Videos" title='Prime Videos' />
                    </a>
                </div>}        
                {googlePlayButton && <div>
                    <a href="https://play.google.com/store/movies" title='Google Play' target='_blank' rel="noreferrer">
                        <img className='icon' src={ googlePlay } alt="Google Play" title='Google Play' />
                    </a>
                </div>}        
                {youtubeButton && <div>
                    <a href="https://youtube.com/" title='netflix' target='_blank' rel="noreferrer">
                        <img className='icon' src={ youtube } alt="YouTube" title="YouTube" />
                    </a>
                </div>}
                {children}
            </div>
    </button>
}

export default Button;
