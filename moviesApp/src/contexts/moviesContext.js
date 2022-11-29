import React, { useState, useEffect } from "react";
import { useDatabase } from "./databaseContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const { getUserSettingsFromDatabase, updateUserSettingsInDatabase } = useDatabase();
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favouriteMovies, setFavouriteMovies] = useState( getUserSettingsFromDatabase().favourite_movies )
  const [favouriteShows, setFavouriteShows] = useState( getUserSettingsFromDatabase().favourite_shows )
  const [mustWatch, setMustWatch] = useState( getUserSettingsFromDatabase().must_watch )

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

  useEffect(() => {
    updateUserSettingsInDatabase({
      favourite_movies: favouriteMovies,
      favourite_shows: favouriteShows,
      must_watch: mustWatch,
    })
  }, [favouriteMovies, favouriteShows, mustWatch, updateUserSettingsInDatabase])

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