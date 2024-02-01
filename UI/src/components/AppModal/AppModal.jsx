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
    const {
        backdrop_path,
        genre_ids,
        release_date,
        overview,
        title,
        vote_average,
    } = data;

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
        <div className='modal-layout'>
            <div style={{ width: '50%' }} className='flex-top'>
                <button className='modal-button'
                    onClick={() => closeModal()}>
                    <span>
                        &#x2715;
                    </span>
                </button>
            </div>

            <div className='gl-horizontally-centre'> 
                <img src={ backdrop_path ? `${imageBaseUrl}${backdrop_path}` : `${blankFilm}`} alt={title+'-movie-poster'} width="50%" />
            </div>

            <div className='half-width' style={{ width: '50%' }}>
                <div className='gl-horizontal-space-between' style={{ marginTop: '1rem' }}>
                    <span>
                        {title}
                    </span>

                    <span>
                        {numberToMonth(releaseDate.getMonth() + 1)}, {releaseDate.getFullYear()}
                    </span>
                </div>

                <div className='gl-horizontal-space-between' style={{ marginTop: '1rem' }}>
                    <div style={{ width: '70%' }}>
                        { genre_ids.map((id, index) => <span key={id}>
                            {`${genreIdToGenreNameMapping[id]}`} 
                            { isLastElement(index) ? '': <span> &#x2022;</span> } 
                        </span>) }
                    </div>

                    <div>
                        <img src={star} alt="star-icon" width="12.8px" height="12.8px" />
                        <span>
                            {vote_average}
                        </span>
                    </div>
                </div>

                <div style={{ width: '70%', marginTop: '1rem' }}>
                    {overview}
                </div>
            </div>
        </div>
    </ReactModal>
}

export default AppModal;
