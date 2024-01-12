import { useEffect, useState } from "react";
import { FilmContext } from "./FilmContext";

export function FilmProvider({children}) {
    const [setFilmRecommendations, filmRecommendations] = useState([]);
    const [setTopRatedFilms, topRatedFilms] = useState({});


    useEffect(
        // let ignore = false;

        //     const response = await fetch('http://localhost:3002/toprated');
        //     const data = await response.json();
        //     console.log(data);
        //     setTopRatedFilms({ ...data });

        //   } catch (error) {
        //     console.error('Error:', error);
    );

    return (<FilmContext.Provider value={{
        filmRecommendations,
        topRatedFilms
    }}>
        { children }
    </FilmContext.Provider>)
}
