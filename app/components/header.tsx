import { NavLink } from "react-router";
import { useRatingsStore } from "~/store";

export function Header() {
  const ratings = useRatingsStore();

  const goodRatingsCount = ratings.filter((r) => r.rating >= 4).length;

  return (
    <header className="header">
      <h1>Out if this world snacks</h1>
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/space-rocks">Space Rocks</NavLink>
          </li>
          <li>
            <NavLink to="/inter-galactic-jello">Inter Galactic Jello</NavLink>
          </li>
        </ul>
      </nav>
      <p>{goodRatingsCount} happy spacers</p>
    </header>
  );
}
