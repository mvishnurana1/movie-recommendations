import React, { useContext, useState } from 'react';
import { AppModal, Card, Loader } from '../../components';
import { filmContext } from '../../context';
import './FilmRecommendations.scss';

function FilmRecommendations() {
    const { 
      filmRecommendations,
      isLoading,
      setColour,
      setEra,
      setFilmRecommendations } = useContext(filmContext);
    const [ chosenFilm, setChosenFilm ] = useState(null);
    const [open, setOpen] = useState(false);
    
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

    function handleClick(film) {
      setOpen(true);
      setChosenFilm(film);
    }

    return (
        <>
          <div className={hide ? 'hide': 'layout'}>
            <div>
              <h2 className='gl-header-level-two'>Recommendations For You</h2>
            </div>
            <div>
              <button className='button-no-native-style back-button'
                onClick={() => {
                  setEra([]);
                  setFilmRecommendations([]);
                  setColour(undefined);
                }}>Back To Questions</button>
            </div>
          </div>
    
          <div className='app-layout gl-horizontally-centre'>
            {filmRecommendations.map((film) => <Card
              onClick={() => handleClick(film)}
              film={ film }
              cardMainClass="movie-card-hover-effect"
              originalTitle={ film.original_title }
              filmRating={ film.vote_average }
              ImgclassNames='card-main-img'
              key={ film.id }
              posterPath={ film.poster_path ?? '' }
              />)}
          </div>

          {open && <AppModal
            isModalOpen={ open }
            closeModal={() => setOpen(false)}
            data={ chosenFilm }
        />}
        </>
      )
}

export { FilmRecommendations };
