import { useSyncExternalStore } from "react";
import { NavLink } from "react-router";
import { store } from "~/store";

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
      <GoodRatingsCount />
    </header>
  );
}

function GoodRatingsCount() {
  const goodRatingsCount = useSyncExternalStore(
    store.subscribe,
    () => {
      return Array.from(store.data.values())
        .flat()
        .filter((r) => r > 3).length;
    },
    () => 0
  );

  return <p>Loved by {goodRatingsCount} customer</p>;
}
