import React from "react";
import { getPopularMovies, getPopularShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateHomePage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const HomePage = (props) => {
  const {data: movies_data, error: movies_error, isLoading: movies_isLoading, isError: movies_isError }  = useQuery(["PopularMovies"], getPopularMovies);
  const {data: shows_data, error: shows_error, isLoading: shows_isLoading, isError: shows_isError }  = useQuery(["PopularShows"], getPopularShows);

  if (movies_isLoading || shows_isLoading) {
    return <Spinner />
  }
  if (!movies_data || !shows_data) {
    return <Spinner />
  }
  if (movies_isError || shows_isError) {
    return <><h1>{movies_error.message}</h1><h1>{shows_error.message}</h1></>
  }  

  const favourite_movies_action = (m) => {
    console.log("Favourite Movies Action: ", m);
  };

  const favourite_shows_action = (s) => {
    console.log("Favourite Shows Action: ", s);
  };

  return (
    <PageTemplate
      title="Dashboard"
      popular_movies={movies_data.results}
      popular_shows={shows_data.results}
      favourite_movies_action={favourite_movies_action}
      favourite_shows_action={favourite_shows_action}
    />
  );
};
export default HomePage;