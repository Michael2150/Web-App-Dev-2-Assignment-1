import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const LoginPage = (props) => {
  return (
    <PageTemplate
      title="Login or Sign Up"
    />
  );
};
export default LoginPage;