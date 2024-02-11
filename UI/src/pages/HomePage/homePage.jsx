import { FilmListing } from './../../components/FilmListing/FilmListing';
import './homePage.scss';

function HomePage() {
    return <>
        <div className='page'>
            <div className='img-listing'>
                <FilmListing />
            </div>
            <div className='homepage'>
                <h2 className='gl-header-level-two'>We'll fetch film recommendations for you</h2>
                <div className='sub-text'>Just answer some mood questions</div>
                <div>
                    <button className='button-no-native-style started'>
                        <span className='button-content'>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default HomePage;
