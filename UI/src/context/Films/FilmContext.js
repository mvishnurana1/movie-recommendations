import { createContext } from "react";

export const FilmContext = createContext({
    topRatedFilms: {},
    filmRecommendations: [],
});
