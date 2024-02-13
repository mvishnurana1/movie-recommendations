import { useContext } from 'react';
import { filmContext } from '../../context';
import './conciseFilmList.scss';

function ConciseFilmList() {
    const { seen } = useContext(filmContext);

    return seen.map((filmSeen) => <div>
        <span>
            { filmSeen.title }
        </span>
    </div>)
}

export { ConciseFilmList }; 
