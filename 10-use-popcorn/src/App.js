import { useState } from "react";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Result from "./components/Result";
import Logo from "./components/Logo";
import Search from "./components/Search";

import Box from "./components/Box";
import MovieList from "./components/MovieList";

import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import { MovieDetails } from "./components/MovieDetails";
import { useMovies } from "./hooks/useMovies";

export const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function App() {
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  const [selectedId, setSelectedId] = useState(null);

  const [query, setQuery] = useState("");

  const { movies, isLoading, error } = useMovies(query);

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovieDetail() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    handleCloseMovieDetail();
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Result movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseDetail={handleCloseMovieDetail}
              onAddWatched={handleAddWatched}
              watchedMovies={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
