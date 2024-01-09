import {
  Box, 
  Boxes, 
  Card, 
  Question } from './components';
import { poster } from './assets';
import { colorPaletteMap } from '../src/helper';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import { useState } from 'react';
import './App.scss';

const filmRating = {
  imDB_rating: 7.8,
};

const filmInfo = {
  title: 'To Catch A Thief',
  availableOn: ['netflix', 'youtube', 'primeVideos', 'googlePlayMovies']
}

function App() {
  const [colour, setColour] = useState('');
  const [era, setEra] = useState('');

  const labels = new Array(10).fill("");

  console.log('chosen Colour: ', colorPaletteMap[colour]);
  console.log('chosen Era: ', era);

  return (
    <ErrorBoundary>
      <div className='App'>
        <h2 className='title'>Movie Recommendation App</h2>
        <div className='movies-listing-layout'>
          {
            <Question
              buttonStyle=''
              buttonClassNames='color-questions-button'
              renderChildConent
              setColour={setColour}
              colorsQuestion
              colours={Object.keys(colorPaletteMap)}
              colour={colour}
              questionText="Pick a color that matches your mood now"
              questionBackgroundClassName='color-question-background'
            />
          }

          {
            <Question
              timelineQuestion={true}
              questionText="Pick one of the following"
              questionBackgroundClassName='cars-question-layout'
              setEra={setEra}
            />
          }
          {labels.map((_value, index) =>
            <Card
              cardMainClass="movie-card-hover-effect"
              filmInfo={filmInfo}
              filmRating={filmRating}
              imgSrc={poster}
              ImgclassNames='card-main-img'
              key={index}
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
