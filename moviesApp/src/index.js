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
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import MoviesListPage from "./pages/moviesListPage";
import PrivateRoute from './privateRoute'
import Contexts from "./contexts/contextWrapper";
import SignupPage from "./pages/signupPage";
import AccountPage from "./pages/accountDetailsPage";
import LogoutPage from "./pages/logoutPage";

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
      <Contexts>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<PrivateRoute> <HomePage/> </PrivateRoute>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/sign-up" element={<SignupPage/>} />
            <Route path="/account" element={<PrivateRoute> <AccountPage/> </PrivateRoute>} />
            <Route path="/logout" element={<LogoutPage/>}/>
            
            {/* Movies Section */}
            <Route path="/movies" element={<PrivateRoute> <Navigate to="/movies/1" /> </PrivateRoute>} />
            <Route path="/movies/:page" element={<PrivateRoute> <MoviesListPage/> </PrivateRoute>} />
            <Route path="/movie/:id" element={<PrivateRoute> <MoviePage/> </PrivateRoute>} />
            <Route exact path="/movies/favourites" element={<PrivateRoute> <FavouriteMoviesPage/> </PrivateRoute>} />
            <Route path="/movies/upcoming" element={<PrivateRoute> <Navigate to="movies/upcoming/1" /> </PrivateRoute>} />
            <Route path="/movies/upcoming/:page" element={<PrivateRoute> <UpcomingMoviesPage/> </PrivateRoute>} />
            <Route path="movies/reviews/form" element={<PrivateRoute> <AddMovieReviewPage/> </PrivateRoute>} />
            <Route path="movies/reviews/:id" element={<PrivateRoute> <MovieReviewPage/> </PrivateRoute>} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Contexts>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );