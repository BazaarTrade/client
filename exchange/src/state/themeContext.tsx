import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
}

const defaultTheme: ThemeContextType = {
    isDark: true,
    setIsDark: () => {}
}

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

type ThemeContextProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);

