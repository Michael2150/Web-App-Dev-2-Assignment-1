import React, { useContext } from "react";
import { getShows } from "../../api/tmdb-api";
import PageTemplate from '../../components/shows/templateShowListPage';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner';
import AddToFavouritesIcon from '../../components/cardIcons/addToFavourites'
import RemoveFromFavourites from "../../components/cardIcons/removeFromFavourites";
import WriteReview from "../../components/cardIcons/writeReview";
import { ShowsContext } from "../../contexts/showsContext";
import { useNavigate } from "react-router-dom";

const ShowsListPage = (props) => {
  const {favourites: showIds } = useContext(ShowsContext);
  const { page } = useParams();
  const {data, error, isLoading, isError }  = useQuery(["shows", page], getShows);
  const navigate = useNavigate();
  
  if (isLoading) {
    return <Spinner />
  }
  
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const shows = data.results;

  return (
    <PageTemplate
      title="Discover Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            {showIds.includes(show.id) ? (
              <RemoveFromFavourites show={show} />
            ) : (
              <AddToFavouritesIcon show={show} />
            )}
            <WriteReview show={show} />
          </>
        );
      }}
      page_data={
        {
          page: page,
          totalPages: 500,
          onPageChange: (p) => {
            navigate(`/shows/${p}`);
          }
        }
      }

    />
  );
};
export default ShowsListPage;