import { createContext, useState } from 'react';

export const MovieContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [search , setSearch] = useState("")
    const sharedValue = { movies, setMovies  , search  , setSearch};

    return (
        <MovieContext.Provider value={sharedValue}>{children}</MovieContext.Provider>
    );
}