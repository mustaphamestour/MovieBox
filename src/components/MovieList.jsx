import {useSelector} from "react-redux";

import MovieCard from "./MovieCard";

function MovieList({ filter }) {
  const movies=useSelector(s=>s.movies);

  const filteredMovies = movies.filter((movie) => {
    if (filter === "watchlist") {
      return movie.inWatchlist;
    }

    if (filter === "favorites") {
      return movie.liked;
    }

    return true;
  });

  return (
    <main className="container py-5">
      <h2 className="text-warning mb-4">
        {filter === "all" && "Tous les films"}
        {filter === "watchlist" && "Ma Watchlist"}
        {filter === "favorites" && "Mes favoris"}
      </h2>

      {filteredMovies.length === 0 ? (
        <p className="alert alert-secondary text-center">
          Aucun film dans cette catégorie.
        </p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

export default MovieList;
