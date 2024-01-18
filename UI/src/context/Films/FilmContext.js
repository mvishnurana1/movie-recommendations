import { createContext } from "react";

const filmContext = createContext({
    topRatedFilms: [],
    filmRecommendations: [],
});

export { filmContext };
