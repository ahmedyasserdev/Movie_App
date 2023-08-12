import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  const theme = useTheme();
  const { Title, Year, imdbID, Type, Poster } = movie;
  return (
    // eslint-disable-next-line react/prop-types

    <Link to = {`/movie/${imdbID}`} >

    <CardActionArea  sx={{ maxWidth: "250px", height: "450px", mx: "auto" ,}}>
      <Card elevation={6} position="relative"   className = "movieCard" >
        <CardMedia
          component="img"
          image={Poster}
          alt={Title}
          sx={{ height: "450px", }}
        />

        <CardContent
        className = "cardContent"
          sx={{
            zIndex: "1",
            position: "absolute",
            bottom: 0,
            left: 0,
            textAlign: "start",
            backgroundColor: theme.palette.mode === "light" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.5)",
            width: "100%",
            borderRadius : "3px"
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            fontWeight={"bold"}
          >
            {Title}
          </Typography>
          <Typography variant="h5" my={1}>
            {Type}
          </Typography>
          <Typography variant="h5">{Year}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
    </Link>

  );
};

export default MovieCard;
