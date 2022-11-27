import React from "react";
import SiteHeader from './components/siteHeader'
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import MoviesListPage from "./pages/moviesListPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            
            {/* Movies Section */}
            <Route path="/movies" element={<Navigate to="/movies/1" />} />
            <Route path="/movies/:page" element={<MoviesListPage/>} />
            <Route path="/movie/:id" element={<MoviePage/>} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage/>} />
            <Route path="/movies/upcoming" element={<Navigate to="movies/upcoming/1" />} />
            <Route path="/movies/upcoming/:page" element={<UpcomingMoviesPage/>} />
            <Route path="movies/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="movies/reviews/:id" element={<MovieReviewPage/> } />

            <Route exact path="movies/my-list" element={<HomePage/> } />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );