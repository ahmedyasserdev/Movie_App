import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container, CssBaseline, ThemeProvider,  } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MovieInfo from './Pages/movie_info/MovieInfo';
import Header from "./Components/Header";
import Home from './Pages/home/Home';
import { ContextProvider } from "./context/ContextProvider";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ContextProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box sx={{backgroundColor: theme.palette.bgColor.body , minHeight : "100vh" }} >
          <Container sx = {{maxWidth  : {xs : "90vw" , sm : "75vw" }}} >
            <BrowserRouter>
              <Routes>
              <Route index element = {<Home />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </ContextProvider>

  );
}

export default App;