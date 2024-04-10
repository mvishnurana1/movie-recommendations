import { useContext, useState } from 'react';
import { filmContext } from '../../context';
import { AppModal } from '../AppModal';
import { bin } from '../../assets';
import './conciseFilmList.scss';

function ConciseFilmList({ setVisitedList }) {
    const { seen, setSeen } = useContext(filmContext);
    const [openedFilm, setOpenedFilm] = useState(null);
    const posterBasePath = 'https://image.tmdb.org/t/p/original/';

    return <>
    {seen.map((filmSeen) => <div 
        className='item'
        key={filmSeen.id}>
        <div style={{
            display: 'flex',
            margin: '0.25rem',
            gap: '1rem',
            alignItems: 'center'}}>
            <img
                alt={`${filmSeen}-poster`}
                src={`${posterBasePath}${filmSeen.poster_path}`}
                width={'25px'}
                style={{ borderRadius: '0.25rem' }}/>
            <span
                style={{ width: '120px' }}
                onClick={() => { 
                    setOpenedFilm(filmSeen);
                    setVisitedList(false);
                }}>
                { filmSeen.title }
            </span>
            <button className='button-no-native-style' onClick={() => {
                localStorage.removeItem('seen');
                const films = seen.filter(fs => fs.id !== filmSeen.id);

                localStorage.setItem('seen', JSON.stringify(films));
                setSeen(films);
            }}>
                <img src={bin} alt="bin-icon" width={'15px'} />
            </button>
        </div>
    </div>)}
    {openedFilm && <AppModal closeModal={() => setOpenedFilm(null)} data={openedFilm} isModalOpen={openedFilm} />}
    </>
}

export { ConciseFilmList }; 
