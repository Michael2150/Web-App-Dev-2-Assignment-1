# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Michael Gerber (20093265) [@Michael2150](https://github.com/Michael2150)

## Overview.

### New Pages.

+ (Modified) List pages, added pagination component to page throught the results and an extender filter/sort component to sort the results
+ (Modified) Home page, shows a list of popular movies/tv-shows.
+ List of tv-shows page
+ Tv-show details page
+ Tv-show favourites page
+ Tv-show reviews form page
+ Login page 
+ Logout page
+ Sign up page
+ Account page

### New Features.

+ Login & Sign up authentication, using Firebase.
+ The favourites for each user is being saved per user, using Firestore.
+ Users that have "premium" features enabled will be able to view their liked movies/tv-shows.
+ All the functionality added for movies has been duplicated for tv shows as well.
+ List pages can be paged through to view more movies/tv-shows.

## Setup requirements.

Make sure to navigate to the /MoviesApp folder in the repo and then run the following commands to setup and start the project.

### Install
```sh
(npm install)
```
### Usage
```sh
npm run start
```

## TMDB endpoints.
+ /tv/{show_id}
+ /genre/tv/list
+ /tv/{show_id}/images
+ /tv/{show_id}/revies
+ /tv/on_the_air
+ /tv/popular

## App Design.

### Component catalogue.
+ I created a new dropdown menu for the site header.

![image](https://user-images.githubusercontent.com/52236517/205690912-445872e7-d48d-4cb9-9c1d-f03c9461908d.png)

+ I created a pagination component to page through the list of movies/tv-shows.
 
![image](https://user-images.githubusercontent.com/52236517/205691228-130add84-eb36-4cb7-8568-8a15f89418b7.png)

+ I extended the filter card, to add sorting functionality.
 
![image](https://user-images.githubusercontent.com/52236517/205691813-94cf5b70-e1d9-480c-89bf-b8e260ee1fc2.png)

### UI Design.
+(Modified) Home page, zoomed out to view the horizontal scrollviews showing the popular movies and tv-shows.
![image](https://user-images.githubusercontent.com/52236517/205692110-48f97e0d-76a5-447c-bd35-a9ac7927b322.png)
+(Modified) List pages, the pagination component on the top and the modified filter card on the left
![image](https://user-images.githubusercontent.com/52236517/205692783-15fcd374-46fa-49dd-b19f-b31a85d4cbe7.png)
+ New list of tv-shows page
![image](https://user-images.githubusercontent.com/52236517/205692839-739fcf7b-0fa4-4c8c-b2de-a29088482497.png)
+ Tv-show details page
![image](https://user-images.githubusercontent.com/52236517/205692918-97805fcb-49a9-4f4d-8644-29ba01094fa3.png)
+ Tv-show favourites page
![image](https://user-images.githubusercontent.com/52236517/205693039-8f9e7795-531d-4922-93c5-c02c815d7cd4.png)
+ Login page 
![image](https://user-images.githubusercontent.com/52236517/205693124-585119de-e90a-4d49-a1c6-8bd1a38db026.png)
+ Logout page
![image](https://user-images.githubusercontent.com/52236517/205693098-7eba9e60-f793-4ab9-a704-0d942bd52196.png)
+ Sign up page
![image](https://user-images.githubusercontent.com/52236517/205693178-8cfa5273-c751-4c76-8528-9929136ff8b2.png)
+ Account page
![image](https://user-images.githubusercontent.com/52236517/205693241-6556d68f-b523-44db-b21a-3365d77c36d7.png)

### Routing.
+ (Private) / - This a new home page that displays some popular movies and tv shows.
+ (Public) /login - User login page.
+ (Public) /sign-up - User sign up page.
+ (Private) /account - Page that shows the user details.
+ (Public) /logout - An endpoint that logs the user out and shows a logged out message.

+ (Private) /movies/{page} - discovery page for movies, it can be paged through.
+ (Private) /movie/{movie_id} - details page for the movie specified.
+ (Public & Premium) /movies/favourites - user's favourites page for the movies.
+ (Private) /movies/upcoming/{page} - page that displays upcoming movies, it can be paged through.
+ (Private) /movies/reviews/form - shows a review form for a movie.
+ (Private) /movies/reviews/{review_id} - shows the reviews for a movie.

+ (Private) /shows/{page} - discovery page for tv-shows, it can be paged through.
+ (Private) /show/{show_id} - details page for the tv-show specified.
+ (Public & Premium) /shows/favourites - user's favourites page for the tv-shows.
+ (Private) /shows/upcoming/{page} - page that displays upcoming tv-shows, it can be paged through.
+ (Private) /shows/reviews/form - shows a review form for a tv-show.
+ (Private) /shows/reviews/{review_id} - shows the revies for a tv-show.

## Independent learning (If relevant).
I used the <a href="https://firebase.google.com/docs?authuser=0&hl=en">Firebase Documentation</a> to navigate the firebase classes and method and learned to initialise and utilise the services they provide.
