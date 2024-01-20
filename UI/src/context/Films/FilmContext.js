import { createContext } from "react";

const filmContext = createContext({
    topRatedFilms: [],
    filmRecommendations: [],
    setFilmReleaseGte: () => {},
    filmReleaseGte: '',
    setFilmReleaseLte: () => {},
    filmReleaseLte: '',
    setColour: () => {},
    colour: '',
    fetchRecommendations: (x, y) => {},
    isLoading: Boolean
});

export { filmContext };
