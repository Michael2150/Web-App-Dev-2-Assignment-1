import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import HorzView from "../horzScrollView";

function HomePageTemplate({title, popular_movies, popular_shows}) {
  const navigate = useNavigate();

  const Heading = (text, link) => (
    <Grid item xs={2}>
      <Paper
        component="div"
        sx={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          margin: 2,
          marginTop: 0,
          padding: "5px"
        }}
      >
        <Link to={link} from="./" style={{ textDecoration: "none" }}>
          <Typography variant="h4" component="h3">
            {text}
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );

  return (
    <>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
      </Grid>
      {Heading("Popular Movies", "/movies")}
      <HorzView/>
      <br/>
      {Heading("Popular TV-Shows", "/shows")}
      <HorzView/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
export default HomePageTemplate;