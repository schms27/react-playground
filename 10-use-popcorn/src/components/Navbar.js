import Logo from "./Logo";
import Result from "./Result";
import Search from "./Search";

export default function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <Result movies={movies} />
    </nav>
  );
}
