import React, { useContext } from 'react';
import { Card } from '../../components';
import { filmContext } from '../../context';
import './TopFilms.scss';

function TopFilms({ mode }) {
    const { topRatedFilms } = useContext(filmContext);

  return (
    <>
      <div className='gl-horizontally-centre'>
        <h2 className='gl-header-level-two'>Our All Time Top Recommendations</h2>
      </div>

      <div className='app-layout'>
        {topRatedFilms.map((film, index) =>
          <Card
            cardMainClass="movie-card-hover-effect"
            originalTitle={ film.original_title }
            filmRating={ film.vote_average }
            posterPath={ film.poster_path }
            ImgclassNames='card-main-img'
            key={ index + 1 }
          />)}
        </div>
    </>
  )
}

export { TopFilms };
