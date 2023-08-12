import { useContext } from "react";
import { IconButton, useTheme , Box } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../theme";



const ThemeSwitcher = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box>



            {theme.palette.mode === "light" ? (
                <IconButton
                    onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                    }}
                    sx = {{color  :"white" ,}}
                    size="medium"
                >
                    <LightModeOutlined sx={{fontSize  :{xs : "20px" ,  sm : "30px"}}}   />
                </IconButton>
            ) : (
                <IconButton
                    onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                    }}
                    sx = {{color  :"white" , }}
                    size="medium"

                >
                    <DarkModeOutlined  sx={{fontSize  :{xs : "20px" ,  sm : "30px"}}}  />
                </IconButton>
            )}</Box>
    )
}

export default ThemeSwitcher