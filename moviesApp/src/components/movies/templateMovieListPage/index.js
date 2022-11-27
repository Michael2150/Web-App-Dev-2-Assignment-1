import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from "../../paginator";
import { useNavigate } from 'react-router-dom';

function MovieListPageTemplate({ movies, title, action: favourite_movie_action, page_data}) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  //Only set up if page data exists
  const [currentPage, setCurrentPage] = useState(page_data ? Number(page_data.page) : 1);
  const genreId = Number(genreFilter);
  const navigate = useNavigate();

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });


  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value);
    } else if (type === "genre") {
      setGenreFilter(value);
    } else if (type === "page") {
      setCurrentPage(value);
      page_data.onPageChange(value);
    }
  };

  return (
    <>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      {
        page_data &&
        <Grid item xs={12} sx={{ padding: '20px 0' }}>
          <Pagination className="pagination-bar" currentPage={currentPage} totalCount={page_data.totalPages} pageSize={1} onPageChange={new_page => handleChange("page",new_page)}/>
        </Grid>
      }
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={favourite_movie_action} movies={displayedMovies}></MovieList>
      </Grid>
      {
        page_data &&
        <Grid item xs={12} sx={{ padding: '20px 0' }}>
          <Pagination className="pagination-bar" currentPage={currentPage} totalCount={page_data.totalPages} pageSize={1} onPageChange={new_page => handleChange("page",new_page)}/>
        </Grid>
      }
    </Grid>
    </>
  );
}
export default MovieListPageTemplate;