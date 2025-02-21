import { NavLink } from "react-router";

export function Header() {
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
    </header>
  );
}
