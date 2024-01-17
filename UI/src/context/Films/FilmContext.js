import { createContext } from "react";

const filmContext = createContext({
    topRatedFilms: [],
    filmRecommendations: [],
    imageBaseUrl: ''
});

export { filmContext };
