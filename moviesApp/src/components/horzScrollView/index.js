import "./horzScrollStyle.css";
import img from '../../images/film-poster-placeholder.png'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';

const movies = [
    "/breaking-bad.webp",
    "/the-leftovers.jpg",
    "/game-of-thrones.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/true-detective.jpg",
    "/walking-dead.jpg"
  ];
  
const HorzView = () => {
    return (
        <>
          <div className="container">
            {movies.map(src => (
              <>
                <Card sx={{ maxWidth: 350, minWidth: 300}}>
                  <CardHeader
                    title={
                      <Typography variant="h5" component="p">
                        {"Movie"}
                      </Typography>
                    }
                  />
                  <CardMedia
                    sx={{ height: 500 }}
                    image={ img }
                  />
                  </Card>
              </>
            ))}
          </div>
        </>
      );
};

export default HorzView;