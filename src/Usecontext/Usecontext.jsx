import {createContext, useContext, useState } from "react";



const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

// 3. Create custom hook
export const useSearch = () => useContext(SearchContext);
