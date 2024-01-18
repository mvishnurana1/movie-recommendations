const express = require('express');
const cors = require('cors');

const app = express();
const secrets = require('./secrets.json');
const topRated = require('./top-rated');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const fetch = require('node-fetch');

app.get('/recommendations', async (req, res) => {
    const movieCategory = req.body;

    const url = 'https://api.themoviedb.org/3/discover/movie?genre=18,35&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${secrets.key}`
      }
    };
  
    fetch(url, options)
    .then(resp => resp.json())
    .then(json => res.send(json));
});

app.get('/toprated', (req, res) => {
  res.send(topRated);
});

function getGenre() {
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

