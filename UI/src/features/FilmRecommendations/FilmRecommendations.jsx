import React, { useContext } from 'react';
import { Card, Loader } from '../../components';
import { filmContext } from '../../context';
import './FilmRecommendations.scss';

function FilmRecommendations() {
    const { filmRecommendations, isLoading } = useContext(filmContext);
    const error = filmRecommendations === null;
    const hide = filmRecommendations.length === 0;

    if (!filmRecommendations) {
        return <></>
    }

    if (error) {
      <div className='gl-horizontally-centre'>
        <h2 className='gl-header-level-two'>Sorry Something Went Wrong</h2>
    </div>
    }

    if (isLoading) {
      return <div className='gl-horizontally-centre'>
          <Loader />
        </div>
    }

    return (
        <>
          <div className={hide ? `hide`: `gl-horizontally-centre`}>
            <h2 className='gl-header-level-two'>Recommendations For You</h2>
          </div>
    
          <div className='app-layout'>
            {filmRecommendations.map((film) =>
              <Card
                cardMainClass="movie-card-hover-effect"
                originalTitle={ film.original_title }
                filmRating={ film.vote_average }
                posterPath={ film.poster_path ?? '' }
                ImgclassNames='card-main-img'
                key={ film.id }
              />)}
            </div>
        </>
      )
}

export { FilmRecommendations };
