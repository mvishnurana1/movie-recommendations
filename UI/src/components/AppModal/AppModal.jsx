import ReactModal from 'react-modal';
import { genreIdToGenreNameMapping, numberToMonth } from '../../helper';
import { blankFilm, star } from '../../assets';
import './AppModal.scss';

function AppModal({ closeModal, data, isModalOpen }) {
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
            <div className='flex-top'>
                <button className='modal-button'
                    onClick={() => closeModal()}>
                    <span style={{ fontWeight: 'bold'}}>
                        &#x2715;
                    </span>
                </button>
            </div>

            <div className='gl-horizontally-centre'>
                <img
                    alt={title+'-movie-poster'}
                    className='img-poster'
                    style={{ borderRadius: '1rem' }}
                    src={ backdrop_path ? `${imageBaseUrl}${backdrop_path}` : `${blankFilm}`}
                />
            </div>

            <div className='img-poster'>
                <div className='gl-horizontal-space-between' style={{ marginTop: '1rem' }}>
                    <span style={{fontSize: '2vw'}}>
                        {title}
                    </span>

                    <span style={{fontSize: '1.2vw'}}>
                        {numberToMonth(releaseDate.getMonth() + 1)}, {releaseDate.getFullYear()}
                    </span>
                </div>

                <div className='gl-horizontal-space-between' style={{ marginTop: '1rem', fontSize: '1.2vw' }}>
                    <div style={{ width: '70%' }}>
                        {genre_ids.map((id, index) => <span key={id}>
                            {`${genreIdToGenreNameMapping[id]} `} 
                            { isLastElement(index) ? ' ': <span> &#x2022; </span> } 
                        </span>)}
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                        <img src={star} alt="star-icon" width="25px" height="25px" />
                        <span>
                            { vote_average.toFixed(1) }
                        </span>
                    </div>
                </div>

                <div style={{
                    fontSize: '1.2vw',
                    marginTop: '1rem',
                }}>
                    {overview}
                </div>
            </div>
        </div>
    </ReactModal>
}

export default AppModal;
