import { createContext } from "react";

const filmContext = createContext({
    filmRecommendations: [],
    setColour: () => {},
    colour: '',
    fetchRecommendations: () => {},
    isLoading: Boolean,
    setLoading: (x) => {},
    era: [],
    setEra: (x) => {},
    setFilmRecommendations: (x) => {},
    setIncludeInternationalFilms: (x) => {},
    includeInternationalFilms: Boolean,
    fetched: Boolean,
    setFetched: (x) => {},
});

export { filmContext };
