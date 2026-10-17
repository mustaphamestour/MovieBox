import { useDispatch } from "react-redux";

function MovieCard({ movie }) {
  const { dispatch } = useDispatch();

  return (
    <div className="col">
      <div className="card h-100 bg-dark text-white shadow">

        <img
          src={movie.poster}
          alt={movie.title}
          className="card-img-top"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>

          <p className="card-text">Année : {movie.year}</p>

          <p className="card-text">Genre : {movie.genre}</p>

          <div className="d-grid gap-2 mt-auto">

            {/* Bouton J'aime */}
            <button
              className={`btn ${
                movie.liked ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() =>
                dispatch({
                  type: "TOGGLE_LIKE",
                  payload: movie.id
                })
              }
            >
              {movie.liked ? "❤️ Aimé" : "🤍 J'aime"}
            </button>

            {/* Bouton Watchlist */}
            <button
              className={`btn ${
                movie.inWatchlist ? "btn-secondary" : "btn-warning"
              }`}
              onClick={() =>
                dispatch({
                  type: movie.inWatchlist
                    ? "REMOVE_FROM_WATCHLIST"
                    : "ADD_TO_WATCHLIST",
                  payload: movie.id
                })
              }
            >
              {movie.inWatchlist
                ? "Retirer de la Watchlist"
                : "+ Ajouter à la Watchlist"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
