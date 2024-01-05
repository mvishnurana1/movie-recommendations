import { Card } from './components';
import { poster } from './assets';
import './App.scss';

const filmRating = {
  imDB_rating: 7.8,
};

const filmInfo = {
  title: 'To Catch A Thief',
  availableOn: ['netflix', 'youtube', 'primeVideos', 'googlePlayMovies']
  // availableOn: ['hulu']
}

function App() {
  const labels = new Array(10).fill("");

  return (
    <div className='App'>
      <h3 className='title'>Movie Recommendation App</h3>
      <div className='centre'>
        <Card />

        {labels.map((_value, index) =>
          <Card
            cardMainClass="movie-card-hover-effect"
            filmRating={filmRating}
            filmInfo={filmInfo}
            imgSrc={poster}
            ImgclassNames='card-main-img'
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default App;
