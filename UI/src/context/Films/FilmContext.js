import { createContext } from "react";

const filmContext = createContext({
    filmRecommendations: [],
    setColour: (colour) => {},
    colour: '',
    fetchRecommendations: () => {},
    isLoading: Boolean,
    setLoading: (loading) => {},
    era: [],
    setEra: (era) => {},
    setFilmRecommendations: (filmRecommendations) => {},
    setIncludeInternationalFilms: (x) => {},
    includeInternationalFilms: Boolean,
    fetched: Boolean,
    setFetched: (fetched) => {},
    topRatedFilms: [],
    start: Boolean,
    setStarted: (start) => {},
    currentDisplay: '',
    setCurrentDisplay: (currentDisplay) => {},
    seen: [],
    setSeen: (seen) => {},
});

export { filmContext };
