import ReactModal from 'react-modal';
import { genreIdToGenreNameMapping, numberToMonth } from '../../helper';
import { blankFilm, star } from '../../assets';
import './AppModal.scss';

function AppModal({
    closeModal,
    data,
    isModalOpen,
}) {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
    const { backdrop_path, genre_ids, title, release_date, vote_average, overview } = data;

    const genereLength = genre_ids.length;
    const releaseDate = new Date(release_date);

    function isLastElement(index) {
        return index === genereLength - 1;
    }

    return <ReactModal
                ariaHideApp={false}
                className={'modal'}
                isOpen={isModalOpen} 
                onRequestClose={closeModal}>
        <div className='flex-top'>
            <h2 style={{color: 'black'}}>Movie Info:</h2>
            <button onClick={() => closeModal()}>Close</button>
        </div>

        <div style={{width: '3rem', marginBottom: '4rem' }}>
            <img src={ backdrop_path ? `${imageBaseUrl}${backdrop_path}` : `${blankFilm}`} alt=""/>
        </div>
        <div>
            {title}
        </div>

        <div>
            {numberToMonth(releaseDate.getMonth() + 1)}, {releaseDate.getFullYear()}
        </div>

        <div>
            { genre_ids.map((id, index) => <span key={id}>
                { genreIdToGenreNameMapping[id] + `${isLastElement(index) ? '': ', '}` }
            </span>) }
        </div>

        <div>
            <img src={star} alt="" width="12.8px" height="12.8px" />
            <span>
                {vote_average}
            </span>
        </div>

        <div>
            {overview}
        </div>
    </ReactModal>
}

export default AppModal;
