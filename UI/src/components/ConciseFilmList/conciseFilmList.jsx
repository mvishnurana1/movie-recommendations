import { useContext } from 'react';
import { filmContext } from '../../context';
import './conciseFilmList.scss';

function ConciseFilmList() {
    const { seen } = useContext(filmContext);
    const posterBasePath = 'https://image.tmdb.org/t/p/original/';

    return seen.map((filmSeen) => <div className='item' key={filmSeen.id}>
        <div style={{
            display: 'flex',
            margin: '0.25rem',
            gap: '1rem',
            alignItems: 'center'}}>
            <img
                alt={`${filmSeen}-poster`}
                src={`${posterBasePath}${filmSeen.poster_path}`}
                width={'25px'}
            />
            <span style={{ maxWidth: '250px' }}>
                { filmSeen.title }
            </span>
        </div>
    </div>)
}

export { ConciseFilmList }; 
