import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";
import { url } from '../url';
import { coloursTofilm, genres, colorPaletteMap } from '../../helper';

export function FilmProvider({ children }) {
    const [colour, setColour] = useState(undefined);
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [era, setEra] = useState([]);
  
    async function fetchTopRatedFilms() {
        const response = await fetch(`${url}/toprated`);
        const data = await response.json();
        const list = data.results;
        
        setTopRatedFilms(list);
    }

    async function fetchRecommendations(greaterDate, lesserDate) {
        setLoading(true);
        const era = [greaterDate, lesserDate];
        setEra(era);

        const codes = filmsGenre(colour);

        const codeListing = codes.join(',');
        
        try {
            const response = await fetch(`${url}/recommendations?releaseDateGte=${lesserDate}&releaseDateLte=${greaterDate}&genre_code=${codeListing}`);
            const data = await response.json();
            const list = data.results;
            setFilmRecommendations(list);
        } catch (err) {
            setFilmRecommendations(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        try {
            let call = true;
            
            if (call) {
                fetchTopRatedFilms();
                call = false;
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    }, []);

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
        topRatedFilms: topRatedFilms,
        colour: colour,
        era: era,
        isLoading: isLoading,
        fetchRecommendations: fetchRecommendations,
        setLoading: setLoading,
    }}>
        { children }
    </filmContext.Provider>)
}
