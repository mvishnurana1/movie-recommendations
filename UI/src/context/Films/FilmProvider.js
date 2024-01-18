import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";

export function FilmProvider({children}) {
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);

    async function fetchTopRatedFilms() {
        const response = await fetch('http://localhost:3002/toprated');
        const data = await response.json();
        const list = data.results;
        
        setTopRatedFilms(list);
    }

    async function fetchRecommendations() {
        const postData = {
            'mood': 'hipply'
        };

        const response = await fetch('http://localhost:3002/recommendations');

        const data = await response.json();
        const list = data.results;
        setFilmRecommendations(list);
    }

    useEffect(() => {
        try {
            let call = true;

            if (call) {
                fetchTopRatedFilms();
                fetchRecommendations();
                call = false;
            }
        } catch (err) {
            console.error('Error: ', err);
        }
    }, []);

    return (<filmContext.Provider value={{
        filmRecommendations: filmRecommendations,
        topRatedFilms: topRatedFilms,
    }}>
        { children }
    </filmContext.Provider>)
}
