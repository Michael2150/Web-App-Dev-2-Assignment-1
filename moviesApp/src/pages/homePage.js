import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateHomePage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const HomePage = (props) => {
  const {movies_data, movies_error, movies_isLoading, movies_isError }  = useQuery(["home_page_movies"], [getMovies]);
  const {shows_data, shows_error, shows_isLoading, shows_isError }  = useQuery(["home_page_tv_shows"], [getMovies]);
  
  console.log("Movies Data: ", movies_data);
  console.log("Shows Data: ", shows_data);

  if (movies_isLoading || shows_isLoading) {
    return <Spinner />
  }

  if (movies_isError || shows_isError) {
    return <><h1>{movies_error.message}</h1><h1>{shows_error.message}</h1></>
  }  

  const favourite_movies_action = (m) => {
    
  };

  const favourite_shows_action = () => {
    
  };

  return (
    <PageTemplate
      title="Dashboard"
      popular_movies={movies_data.results}
      popular_shows={shows_data.results}
      favourite_movies_action
    />
  );
};
export default HomePage;