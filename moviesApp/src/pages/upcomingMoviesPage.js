import React, {useContext} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/movies/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data.results;
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <PlaylistAddIcon movie={movie} />
        }}
        page={1}
        />
    );
};
export default UpcomingMoviesPage;