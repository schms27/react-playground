import { useState } from "react";
import { useEffect } from "react";
import StarRating from "./StarRating";
import { API_KEY } from "../App";

export function MovieDetails({
  selectedId,
  onCloseDetail,
  onAddWatched,
  watchedMovies,
}) {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);
  const isWatched = watchedMovies.some((w) => w.imdbID === selectedId);
  const watchedUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function cleanup() {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  useEffect(
    function () {
      function keydownCallback(e) {
        if (e.code === "Escape") {
          onCloseDetail();
        }
      }

      document.addEventListener("keydown", keydownCallback);

      return function cleanup() {
        document.removeEventListener("keydown", keydownCallback);
      };
    },
    [onCloseDetail]
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: userRating,
    };

    onAddWatched(newWatchedMovie);
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseDetail}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        {!isWatched ? (
          <div className="rating">
            <StarRating
              defaultRating={userRating}
              maxStars={10}
              size={24}
              onSetRating={setUserRating}
            ></StarRating>
            {userRating > 0 && (
              <button className="btn-add" onClick={handleAdd}>
                + Add to watched
              </button>
            )}
          </div>
        ) : (
          <p>
            You rated this movie with {watchedUserRating} <span>🌟</span>
          </p>
        )}

        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}
