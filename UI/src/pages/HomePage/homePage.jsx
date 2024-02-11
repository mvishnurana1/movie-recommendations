import { useContext } from 'react';
import { filmContext } from '../../context';
import { FilmListing } from './../../components/FilmListing/FilmListing';
import './homePage.scss';

function HomePage() {
    const { setStarted } = useContext(filmContext);
    return <>
        <div className='page'>
            <div className='img-listing'>
                <FilmListing />
            </div>
            <div className='homepage'>
                <h2 className='gl-header-level-two'>We'll fetch film recommendations for you</h2>
                <div className='sub-text'>Just answer some mood questions</div>
                <div>
                    <button
                        onClick={() => setStarted(true)}
                        title='get-started-button'
                        className='button-no-native-style started'>
                        <span className='button-content'>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default HomePage;
