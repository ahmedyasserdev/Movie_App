import { useContext, useEffect , useState } from 'react';
import { Box, Grid,  } from "@mui/material";
import MovieCard from "./MovieCard";
import { MovieContext } from '../../context/ContextProvider';
import Loader from '../Loader';
const MovieCards = () => {
  const {search , setMovies , movies } = useContext(MovieContext)
  const [isLoading , seIsLoading] = useState(false);


  const getMovies = async() => {
   try  {
    seIsLoading(true)
    
    const result = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`)
    const data  = await result.json()

    setMovies(data.Search)
  }catch(error) {
    console.log(error)
  }finally {
    seIsLoading(false)

  }

   
  }


  useEffect(() => {
    if (search) {

      getMovies()
    }
  }, [search])




  return (
   
    <Box mt = {5}>

    {isLoading && <Loader /> }
      <Grid
        container 
        spacing = {2}
      >
        {movies?.map((movie) => (
          <Grid item key={movie.imdbID} xs = {12} sm = {6} md = {3}    >
          <MovieCard  movie = {movie}  />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieCards;
