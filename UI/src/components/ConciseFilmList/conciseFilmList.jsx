import { useContext, useState } from 'react';
import { filmContext } from '../../context';
import './conciseFilmList.scss';
import { AppModal } from '../AppModal';

function ConciseFilmList() {
    const { seen } = useContext(filmContext);
    const [openedFilm, setOpenedFilm] = useState(null);
    const posterBasePath = 'https://image.tmdb.org/t/p/original/';

    return <>
    {seen.map((filmSeen) => <div 
        className='item'
        key={filmSeen.id}
        onClick={() => setOpenedFilm(filmSeen)}>
        <div style={{
            display: 'flex',
            margin: '0.25rem',
            gap: '1rem',
            alignItems: 'center'}}>
            <img
                alt={`${filmSeen}-poster`}
                src={`${posterBasePath}${filmSeen.poster_path}`}
                width={'25px'}
                style={{ borderRadius: '0.25rem' }}
            />
            <span style={{ maxWidth: '250px' }}>
                { filmSeen.title }
            </span>
        </div>
    </div>)}
    {openedFilm && <AppModal closeModal={() => setOpenedFilm(null)} data={openedFilm} isModalOpen={openedFilm} />}
    </>
}

export { ConciseFilmList }; 
