import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from "../paginator";
import { useNavigate } from 'react-router-dom';

function HomePageTemplate({ movies, title, action, page }) {
  const navigate = useNavigate();
  return (
    <>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={"Popular Movies"} />
        <a href="/"></a>
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
    </>
  );
}
export default HomePageTemplate;