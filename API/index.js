const express = require('express');
const cors = require('cors');

const app = express();
const secrets = require('./secrets.json');
const topRated = require('./top-rated');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const fetch = require('node-fetch');

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

// movie genre
// year
// mood
// Return -> films (on both extreme spectrum of the mood)
app.post('/recommendations', (req, res) => {
    const movieCategory = req.body;

    console.log(movieCategory);
    
    getGenre();

    res.send(movieCategory);
});

app.get('/cors', (req, res) => {
  res.send({ "msg": "This has CORS enabled 🎈" })
})


app.get('/toprated', (req, res) => {
  res.send(topRated);
});

function getGenre() {
  // const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const url = 'https://api.themoviedb.org/3/movie/27/recommendations?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.key}`
    }
  };

  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}

app.listen(PORT, () => {
    console.log(`${PORT}`);
});

