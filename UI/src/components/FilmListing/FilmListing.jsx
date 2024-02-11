import Card from '../Card/card';
import { useContext } from 'react';
import { filmContext } from '../../context';
import './FilmListing.scss';

function FilmListing() {

    const { topRatedFilms } = useContext(filmContext);

    return <div className='background-layout gl-horizontally-centre'>
        {topRatedFilms.map((film) => <Card
            film={ film }
            cardMainClass="movie-card-hover-effect"
            originalTitle={ film.title }
            filmRating={ film.vote_average }
            ImgclassNames='card-main-img'
            key={ film.id }
            posterPath={ film.poster_path ?? '' }
        />)}
  </div>
}

export { FilmListing };
