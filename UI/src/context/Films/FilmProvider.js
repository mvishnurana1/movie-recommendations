import { useEffect, useState } from "react";
import { filmContext } from "./FilmContext";

export function FilmProvider({children}) {
    const [filmRecommendations, setFilmRecommendations] = useState([]);
    const [topRatedFilms, setTopRatedFilms] = useState([]);
    const [imageBaseUrl, setImageBaseUrl] = useState('https://image.tmdb.org/t/p/original')

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

        const response = await fetch('http://localhost:3002/recommendations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)});

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
        imageBaseUrl: imageBaseUrl,
        filmRecommendations: filmRecommendations,
        topRatedFilms: topRatedFilms,
    }}>
        { children }
    </filmContext.Provider>)
}
