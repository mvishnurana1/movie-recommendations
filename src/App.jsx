import { 
  Box, 
  Boxes, 
  Card, 
  Question } from './components';
import { poster } from './assets';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';
import { useState } from 'react';

const filmRating = {
  imDB_rating: 7.8,
};

const filmInfo = {
  title: 'To Catch A Thief',
  availableOn: ['netflix', 'youtube', 'primeVideos', 'googlePlayMovies']
}

const colorPaletteMap = {
  '#ff0034': 'red',
  '#3F51B5': 'blue',
  '#4CAF50': 'green',
  '#FFEB3B': 'yellow',  
  '#9C27B0': 'purple',
  '#FF5722': 'orange',
  '#000000': 'black',
  '#F3F3F3': 'white',
  '#F77791': 'pink',
  '#795548': 'brown'
};

function App() {
  const [colour, setColour] = useState('');
  const labels = new Array(10).fill("");

  console.log('chosen Colour: ', colorPaletteMap[colour]);

  return (
    <ErrorBoundary>
      <div className='App'>
        <h3 className='title'>Movie Recommendation App</h3>
        <div className='movies-listing-layout'>
          {
            <Question
              buttonStyle=''
              buttonClassNames='color-questions-button'
              renderChildConent
              chosenColour={setColour}
              colors={Object.keys(colorPaletteMap)}
              questionText="Pick a color that matches your mood now"
              questionBackgroundClassName='color-question-background'
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
