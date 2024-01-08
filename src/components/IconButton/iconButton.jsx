import React from 'react';
import { amazon, googlePlay, netflix, youtube } from '../../assets';
import './iconButton.scss';

function IconButton({ classNames, btn }) {
    switch(btn) {
        case 'netflix':
            return <button className={`button ${classNames}`}>
                <div>
                    <a href="https://www.netflix.com/" title='Netflix' target='_blank' rel="noreferrer">
                        <img className='gl-icon-rotate' src={ netflix } alt="Netflix" title="Netflix" />
                    </a>
                </div>
            </button>
        
        case 'youtube':
            return <button className={`button ${classNames}`}>
                <div>
                    <a href="https://youtube.com/" title='YouTube' target='_blank' rel="noreferrer">
                        <img className='gl-icon-rotate' src={ youtube } alt="YouTube" title="YouTube" />
                    </a>
                </div>
            </button>

        case 'primeVideos':
            return <button className={`button ${classNames}`}>
                <div>
                    <a href="https://www.primevideo.com/" title='Prime Videos' target='_blank' rel="noreferrer">
                        <img className='gl-round gl-icon-rotate' src={ amazon } alt="Prime Videos" title='Prime Videos' />
                    </a>
                </div>
            </button>

        case 'googlePlayMovies':
            return <button className={`button ${classNames}`}>
                <div>
                    <a href="https://play.google.com/store/movies" title='Google Play Movies' target='_blank' rel="noreferrer">
                        <img className='gl-icon-rotate' src={ googlePlay } alt="Google Play Movies" title='Google Play Movies' />
                    </a>
                </div>
            </button>
        
        default:
            return <>{btn}</>
    }
}

export default IconButton;
