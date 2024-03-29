import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";
import { url } from '../url';
import { coloursTofilm, genres, colorPaletteMap } from '../../helper';

export function FilmProvider({ children }) {
    const [colour, setColour] = useState(undefined);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [era, setEra] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [includeInternationalFilms, setIncludeInternationalFilms] = useState({
        set: false,
        value: 'No',
    });
    const [currentDisplay, setCurrentDisplay] = useState('get-started');
    const [seen, setSeen] = useState([]);

    async function fetchTopRatedFilms() {
        const response = await fetch(`${url}/top-rated`);
        const data = await response.json();
        const list = data.results;
        
        setTopRatedFilms(list);
    }

    useEffect(() => {
        const cachedFilms = JSON.parse(localStorage.getItem('fetched_films')) ?? [];
        setFilmRecommendations(cachedFilms);

        const films = JSON.parse(localStorage.getItem('seen')) ?? [];
        setSeen(films);

        try {
            let call = true;
            setLoading(true);

            if (call) {
                fetchTopRatedFilms();
                call = false;
            }
        } catch (err) {
            console.error('Error: ', err);
        } finally {
            setLoading(false);
        }
    }, []);
  
    async function fetchRecommendations() {
        setLoading(true);
        setFetched(true);

        const greaterDate = era[0];
        const lesserDate = era[1];

        const codes = filmsGenre(colour);

        const codeListing = codes.join(',');
        
        try {
            const response = await fetch(`${url}/recommendations?releaseDateGte=${lesserDate}&releaseDateLte=${greaterDate}&genre_code=${codeListing}`);
            const data = await response.json();
            // const list = data.results;
            setFilmRecommendations(data);

            localStorage.setItem('fetched_films', JSON.stringify(data));
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    }

    function filmsGenre(color = '#22092C') {
        // Maps to Purple by default:
        const colourString = (colorPaletteMap[color]);
        
        const codes = computeGenreCode(coloursTofilm[colourString]);
        return codes;
    }
    
    function computeGenreCode(generesFound) {
        const list = generesFound.map(genreName => genres.filter(g => genreName === g.name)).flat(1);
    
        const codes = list.map(co => co.id);
        return codes;
    }

    return (<filmContext.Provider value={{
        setColour: setColour,
        filmRecommendations: filmRecommendations,
        colour: colour,
        era: era,
        isLoading: isLoading,
        includeInternationalFilms: includeInternationalFilms,
        fetched: fetched,
        fetchRecommendations: fetchRecommendations,
        setLoading: setLoading,
        setEra: setEra,
        setFilmRecommendations: setFilmRecommendations,
        setIncludeInternationalFilms: setIncludeInternationalFilms,
        setFetched: setFetched,
        topRatedFilms: topRatedFilms,
        currentDisplay: currentDisplay,
        setCurrentDisplay: setCurrentDisplay,
        seen: seen,
        setSeen: setSeen,
    }}>
        { children }
    </filmContext.Provider>)
}
