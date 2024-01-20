import React, { useContext } from 'react';
import { Card } from '../../components';
import { filmContext } from '../../context';
import './FilmRecommendations.scss';

function FilmRecommendations() {
    const { filmRecommendations } = useContext(filmContext);
    const hide = filmRecommendations.length === 0;

    if (!filmRecommendations) {
        return <></>
    }

    return (
        <>
          <div className={hide ? `hide`: `gl-horizontally-centre`}>
            <h2 className='gl-header-level-two'>Our All Time Top Recommendations</h2>
          </div>
    
          <div className='movies-listing-layout'>
            {hide && <>
                <div className='gl-horizontally-centre'>
                    <h2 className='gl-header-level-two'>Sorry Something Went Wrong:</h2>
                </div>
            </>}
            {filmRecommendations.map((film, index) =>
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

export { FilmRecommendations };
