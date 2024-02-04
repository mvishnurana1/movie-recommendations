const express = require('express');
const cors = require('cors');
const app = express();
const secrets = require('./secrets.json');
const topRated = require('./top-rated');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const fetch = require('node-fetch');
const moviesEndPoint = 'https://api.themoviedb.org/3/discover/movie';

app.get('/recommendations', async (req, res) => {
    console.log(req.query);
    const releaseDateGte = req.query.releaseDateGte;
    const releaseDateLte = req.query.releaseDateLte;
    const genre_code = req.query.genre_code;

    const url = 
    `${moviesEndPoint}?api_key=${secrets.api_key}&include_video=true&sort_by=vote_average.desc
    &sort_by=popularity.desc&page=1&primary_release_date.lte=${releaseDateLte}&primary_release_date.gte=${releaseDateGte}
    &with_genres=${genre_code}&vote_count.gte=100&with_original_language=hi`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${secrets.token}`
      }
    };
  
    fetch(url, options)
    .then(resp => resp.json())
    .then(json => { 
      return res.send(json)
    } );
});

app.get('/toprated', (req, res) => {
  res.send(topRated);
});

app.listen(PORT, () => {
    console.log(`${PORT}`);
});
