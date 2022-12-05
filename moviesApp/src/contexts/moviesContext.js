import React, { useState, useEffect } from "react";
import { getUserSettings, setUserSettings } from "../database/dataAccess";
import { useAuth } from "./authContext";
import { useQuery } from "react-query";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favouriteMovies, setFavouriteMovies] = useState( [] )
  const [favouriteShows, setFavouriteShows] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const { currentUser } = useAuth();  
  const {data: user_settings, error, isLoading, isError }  = useQuery(["user_settings", currentUser.uid], getUserSettings, {cacheTime: 0, staletime: 0});

  const addMovieToFavourites = (movie) => {
    let newFavourites = [...favouriteMovies];
    if (!favouriteMovies.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavouriteMovies(newFavourites);
  };

  const removeMovieFromFavourites = (movie) => {
    setFavouriteMovies( favouriteMovies.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addShowToFavourites = (show) => {
    let newFavourites = [...favouriteShows];
    if (!favouriteShows.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavouriteShows(newFavourites);
  };

  const removeShowFromFavourites = (show) => {
    setFavouriteShows( favouriteShows.filter(
      (sId) => sId !== show.id
    ))
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites: favouriteMovies,
        addToFavourites: addMovieToFavourites,
        removeFromFavourites: removeMovieFromFavourites,
        shows: favouriteShows,
        addShowToFavourites,
        removeShowFromFavourites,
        reviews: myReviews,
        addReview,
        mustWatch: mustWatch,
        addToMustWatch,
        removeFromMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;