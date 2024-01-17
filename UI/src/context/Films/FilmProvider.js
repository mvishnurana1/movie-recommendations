import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";

export function FilmProvider({children}) {
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [imageBaseUrl, setImageBaseUrl] = useState('https://image.tmdb.org/t/p/original')

    async function fetchFunction() {
        const response = await fetch('http://localhost:3002/toprated');
        const data = await response.json();
        const list = data.results;
        
        setTopRatedFilms(list);
    }

    useEffect(() => {
        try {
           fetchFunction();
        } catch (err) {
            console.error('Error: ', err);
        }
    }, []);

    return (<filmContext.Provider value={{
        imageBaseUrl: imageBaseUrl,
        filmRecommendations: filmRecommendations,
        topRatedFilms: topRatedFilms,
    }}>
        { children }
    </filmContext.Provider>)
}
