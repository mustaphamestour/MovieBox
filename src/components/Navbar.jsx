import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";


function Navbar() {
  const movies = useSelector(s=>s.movies);

  const watchlistCount = movies.filter(
    (movie) => movie.inWatchlist
  ).length;

  const likedCount = movies.filter(
    (movie) => movie.liked
  ).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <span className="navbar-brand text-warning fw-bold fs-3">
        🎬 MovieBox
      </span>

      <div className="d-flex flex-wrap gap-3 ms-auto">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-warning" : "text-white"}`
          }
        >
          Tous les films
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-warning" : "text-white"}`
          }
        >
          Watchlist ({watchlistCount})
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-warning" : "text-white"}`
          }
        >
          Favoris ({likedCount})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
