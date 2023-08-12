import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode

                bgColor : {
                    header : "#0f1710",
                    body : "#fff",
                }
            }
            : {
                // palette values for dark mode
                bgColor : {
                    header : "#0f1710",
                    body : "#1a242f",
                }
            }),
    },
});

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return [theme, colorMode];
};