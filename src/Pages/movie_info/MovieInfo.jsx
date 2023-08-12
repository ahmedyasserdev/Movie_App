import { useTheme } from "@emotion/react";
import { Box, Card, CardMedia, Fab, Stack, Typography , Rating  } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";
import Loader from "../../Components/Loader";

const MovieInfo = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([])
  const [isLoading, seIsLoading] = useState(false);

  const getMoviesDetails = async () => {

    try {
      seIsLoading(true)
      const result = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`)
      const data = await result.json()
      setMovieDetails(data)
      return data
    } finally {
      seIsLoading(false)
    }
  }

  useEffect(() => {
    getMoviesDetails()
    console.log(movieDetails)
  }, [id])


  const { Title, Poster, Genre, Country, Actors, Language, Runtime, imdbRating , Year , Plot } = movieDetails



  return (

    <Box pt={8}>
      {isLoading && <Loader />}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent= {{xs : "center" , sm : "space-between"}}
        gap={{xs : 3 , sm : 5}}
      >
        <Box maxWidth={400}>

          <Card elevation={6} sx={{ maxWidth: 400, position: "relative" }}>
            <Fab sx={{ position: "absolute", top: "10px", left: "10px" }} color="primary" >
              <FavoriteBorder />
            </Fab>

            <CardMedia
              component="img"
              image={Poster}
              alt={Title}
              sx={{ height: 600 , maxWidth : 400 }}
            />
          </Card>
        </Box>
   
   
        <Box p={2} maxWidth={600} sx ={{textAlign : {xs : "center" , sm : "start"}}}  >
          <Typography variant="h3"  color = {theme.palette.primary.main} gutterBottom >
            {Title}
          </Typography>
          <Typography variant="p" color = {theme.palette.text.dark}  >
            Year: {Year}
          </Typography>
        
        
          <Box sx = {{display : "flex" , flexDirection : "column" , gap : .5 , mb : 2}}   >
          <Typography gutterBottom color = {"gray"}   >
          (This movie produce in)

      </Typography>

      <Typography variant ="h6" color = {"inital"}  >{Country}</Typography>

          
          
          </Box>


        <Typography variant="h6" gutterBottom  >
          Category : {Genre}
        </Typography>
        <Typography variant="h6" gutterBottom >
        Language : {Language}
        </Typography>

        <Typography variant="h6" gutterBottom >
        Actors : {Actors}
        </Typography>
        <Typography variant="h6" gutterBottom >
        Movie Time : {Runtime}
        </Typography>

        <Typography variant="h6" color = "gray" >
         Rating : {Number(imdbRating)}
        </Typography>


    <Box>
    <Rating value = {Number(imdbRating)} precision={0.1}  max= {10} readOnly />
    
    </Box>

        <Box display = "flex" flexDirection={"column"} sx={{textAlign : "start" , lineHeight : 1.6 , }}  mt = {2} py = {2} >


          <Typography variant = "h6"   fontWeight = "bold">
            Description
          </Typography>

          

          <Typography variant = "p"   fontWeight = "bold">
              {Plot}
          </Typography>
          
        </Box>
        </Box>
    
    
        </Stack>
    </Box>



  );
};

export default MovieInfo;