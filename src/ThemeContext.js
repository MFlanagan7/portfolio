import { createContext, useState } from "react";

export const ThemeContext = createContext({
    setThemeToLight: () => {},
    setThemeToDark: () => {},
    setThemeToBlue: () => {},
});

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState();

    function setThemeToLight() {
        setTheme('light');
        // console.log(theme);
    }

    function setThemeToDark() {
        setTheme('dark');
        // console.log(theme);
    }

    function setThemeToBlue() {
        setTheme('blue');
        // console.log(theme);
    }

    const contextValue = {
        theme: theme,
        setThemeToLight,
        setThemeToDark,
        setThemeToBlue,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;