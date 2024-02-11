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

    const hindiFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'hi');
    const germanFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'de');
    const japaneseFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'ja');
    const spanishFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'es');
    const koreanFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'ko');
    const englishFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'en');
    const russianFilms = await fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, 'ru');

    films = [
      ...germanFilms,
      ...japaneseFilms,
      ...spanishFilms,
      ...hindiFilms,
      ...koreanFilms,
      ...englishFilms,
      ...russianFilms,
    ];

    res.send(films);
});

app.get('/top-rated', async (_req, res) => {
  res.send(topRated);
});

async function fetchForeignFilms(releaseDateLte, releaseDateGte, genre_code, lang) {
  const url = getUrlWithArgs(releaseDateLte, releaseDateGte, genre_code, lang);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${secrets.token}`
    }
  };

  let films = await fetch(url, options)
  .then(resp => resp.json())
  .then(json => json);

  return films.results.slice(0, 5);
}

function getUrlWithArgs(releaseDateLte, releaseDateGte, genre_code, lang) {
  const url =
    `${moviesEndPoint}?api_key=${secrets.api_key}&include_video=true&sort_by=vote_average.desc
    &sort_by=popularity.desc&page=1&primary_release_date.lte=${releaseDateLte}&primary_release_date.gte=${releaseDateGte}
    &with_genres=${genre_code}&vote_count.gte=100&with_original_language=${lang}`;
  
  return url;
}

app.listen(PORT, () => {
    console.log(`${PORT}`);
});
