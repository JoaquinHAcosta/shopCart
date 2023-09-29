import { createContext } from "react";

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
    return (
        <FiltersContext.Provider value={{
            category: 'all',
            minPrince: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}