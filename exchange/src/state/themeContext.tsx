import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ThemeContextType {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
}

const defaultTheme: ThemeContextType = {
    isDark: true,
    setIsDark: () => {}
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type ThemeContextProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({children}: ThemeContextProviderProps) => {
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeContext.Provider value = {{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);