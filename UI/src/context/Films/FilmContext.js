import { createContext } from "react";

const filmContext = createContext({
    filmRecommendations: [],
    setColour: () => {},
    colour: '',
    fetchRecommendations: (x, y) => {},
    isLoading: Boolean,
    setLoading: (x) => {},
    era: [],
    setEra: (x) => {},
    setFilmRecommendations: (x) => {},
    setCulture: (x) => {},
    culture: '',
    fetched: Boolean,
    setFetched: (x) => {},
});

export { filmContext };
