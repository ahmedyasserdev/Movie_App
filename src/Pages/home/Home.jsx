import { Box } from "@mui/material"
import SearchBar from "../../Components/SearchBar"
import MovieCards from './../../Components/movie-cards/MovieCards';

const Home = () => {
  return (
    <Box pt = {2} >
    <SearchBar  />
    <MovieCards />

    </Box>
  )
}

export default Home