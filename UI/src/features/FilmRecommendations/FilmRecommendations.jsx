import React, { useContext, useState } from 'react';
import { AppModal, Card, Loader } from '../../components';
import { filmContext } from '../../context';
import { film, globe } from '../../assets';
import './FilmRecommendations.scss';

function FilmRecommendations() {
    const {
      filmRecommendations,
      isLoading,
      setColour,
      setEra,
      setIncludeInternationalFilms,
      setFilmRecommendations,
      setFetched,
      fetched } = useContext(filmContext);
    const [ chosenFilm, setChosenFilm ] = useState(null);
    const [open, setOpen] = useState(false);
    
    const error = filmRecommendations === null;
    const noResult = filmRecommendations?.length === 0;

    if (!filmRecommendations) {
        return <></>
    }

    if (error) {
      <div className='gl-horizontally-centre'>
        <h2 className='gl-header-level-two'>Sorry Something Went Wrong</h2>
    </div>
    }

    if (isLoading) {
      return <div className='loader-container'>
          <Loader />
        </div>
    }

    function handleClick(film) {
      setOpen(true);
      setChosenFilm(film);
    }

    function setStatesToDefault() {
      setEra([]);
      setFilmRecommendations([]);
      setIncludeInternationalFilms({
        set: false,
        value: 'No',
      });
      setColour(undefined);
      setFetched(false);
    }

    function noResultsReturned() {
      return <div className='no-results-container'>
        <div className='content'>
          <div>
            <div className='gl-horizontally-centre'>
              <img src={ globe } alt='film-gif' width={'200px'} />
            </div>
            <h2 className='header-spacing'>Well that's a miss</h2>
            <span>
              Sorry, that filter combination has no results.          
            </span>
            <span>Please try different criteria.</span>
          </div>
          <div className='gl-horizontally-centre main-button'>
            <button className='button-no-native-style back-button'
              onClick={() => setStatesToDefault()}>
                <span>Try Again</span>
            </button>
          </div>
        </div>
    </div>
    }

    return (
        <>
          <div className={noResult ? 'hide': 'layout'}>
            <div>
              <h2 className='gl-header-level-two'>Recommendations For You</h2>
            </div>
            <div>
              <button className='button-no-native-style back-button'
                onClick={() => setStatesToDefault()}>
                  <span>Back To Questions</span>
                   </button>
            </div>
          </div>

          {noResult && fetched && noResultsReturned()}
    
          <div className='app-layout gl-horizontally-centre'>
            {filmRecommendations.map((film) => <Card
              onClick={() => handleClick(film)}
              film={ film }
              cardMainClass="movie-card-hover-effect"
              originalTitle={ film.title }
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
