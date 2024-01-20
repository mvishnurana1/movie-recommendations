import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";
import { coloursTofilm, genres, colorPaletteMap } from '../../helper';

export function FilmProvider({children}) {
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [colour, setColour] = useState('');
    
    async function fetchTopRatedFilms() {
        const response = await fetch('http://localhost:3002/toprated');
        const data = await response.json();
        const list = data.results;
        
        setTopRatedFilms(list);
    }

    async function fetchRecommendations(greaterDate, lesserDate) {
        let codes = filmsGenre(colour);
        
        const codeListing = codes.join(',');
        
        const response = await fetch(
            `http://localhost:3002/recommendations?releaseDateGte=${lesserDate}&releaseDateLte=${greaterDate}&genre_code=${codeListing}`
            );

        const data = await response.json();
        const list = data.results;
        setFilmRecommendations(list);
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

    function filmsGenre(colour) {
        const colourString = (colorPaletteMap[colour]);
    
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
        fetchRecommendations: fetchRecommendations,
    }}>
        { children }
    </filmContext.Provider>)
}
