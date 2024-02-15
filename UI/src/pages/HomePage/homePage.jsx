import { useContext } from 'react';
import { filmContext } from '../../context';
import { FilmListing, Loader } from './../../components';
import './homePage.scss';

function HomePage() {
    const { isLoading, setCurrentDisplay } = useContext(filmContext);

    if (isLoading) {
    return <div className='loader-container'>
        <Loader />
    </div>
    }

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
                        onClick={() => setCurrentDisplay('colour-question')}
                        title='Get Started'
                        className='button-no-native-style app-button back-button'>
                        <span style={{ color: '#402B3A' }} className='button-content'>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default HomePage;
