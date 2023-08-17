import { useRef } from "react";
import { useKeydown } from "../hooks/useKeydown";

export default function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useKeydown("Enter", () => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
