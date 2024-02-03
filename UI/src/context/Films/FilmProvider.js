import { useState } from "react";
import { filmContext } from "./FilmContext";
import { url } from '../url';
import { coloursTofilm, genres, colorPaletteMap } from '../../helper';

export function FilmProvider({ children }) {
    const [colour, setColour] = useState(undefined);
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [era, setEra] = useState([]);
    const [includeInternationalFilms, setIncludeInternationalFilms] = useState(true);

    const [fetched, setFetched] = useState(false);
  
    async function fetchRecommendations() {
        setLoading(true);

        const greaterDate = era[0];
        const lesserDate = era[1];

        console.log('greater: ', greaterDate);
        console.log('Lesser: ', lesserDate);

        const codes = filmsGenre(colour);

        const codeListing = codes.join(',');
        
        try {
            const response = await fetch(`${url}/recommendations?releaseDateGte=${lesserDate}&releaseDateLte=${greaterDate}&genre_code=${codeListing}`);
            const data = await response.json();
            const list = data.results;
            setFilmRecommendations(list);
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
            setFetched(true);
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
    }}>
        { children }
    </filmContext.Provider>)
}
