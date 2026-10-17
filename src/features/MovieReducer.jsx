const initialState = {
  filter: "all",
  movies: [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Science-fiction",
      poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      liked: false,
      inWatchlist: false
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      genre: "Crime / Drame",
      poster: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",      liked: false,
      inWatchlist: false
    },
    {
      id: 4,
      title: "Predestination",
      year: 2014,
      genre: "Science-fiction / Thriller",
      poster: "https://www.impawards.com/intl/australia/2014/posters/predestination_ver2.jpg",
      liked: false,
      inWatchlist: false
    },
    {
      id: 5,
      title: "The Prestige",
      year: 2006,
      genre: "Thriller",
      poster: "https://image.tmdb.org/t/p/w500/37Fr7lY4QBHsuxlLJIfTNxW6nGW.jpg",liked:false ,
      liked: false,
      inWatchlist: false
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      genre: "Science-fiction",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      liked: false,
      inWatchlist: false
    }
    
  ]
};

function MovieReducer(state = initialState,action) {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, inWatchlist: true }
            : movie
        )
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, inWatchlist: false }
            : movie
        )
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, liked: !movie.liked }
            : movie
        )
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}
export default MovieReducer ;
