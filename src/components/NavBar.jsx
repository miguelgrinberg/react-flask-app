import useMoviesContext from "../context/MoviesContext";

export const Tabs = Object.freeze({
  Movies: "Movies",
  Favourites: "Favorits",
  Recommended: "Recommended",
});

export default function NavBar(props) {
  const { setTab } = useMoviesContext();

  return (
    <nav className="grid h-12 w-full grid-cols-7 items-center justify-between bg-primary">
      <div className="col-span-1">
        <header>
          <h1 className="select-none text-center font-bold text-secondary" onClick={() => setTab(Tabs.Movies)}>
            Movie App
          </h1>
        </header>
      </div>

      <div className="col-span-3 flex flex-row items-center justify-center">{props.children}</div>

      <div className="col-span-3 flex flex-row justify-center gap-20 text-secondary">
        <button className="hover:underline hover:underline-offset-[17px]" onClick={() => setTab(Tabs.Favourites)}>
          {Tabs.Favourites}
        </button>
        <button className="hover:underline hover:underline-offset-[17px]" onClick={() => setTab(Tabs.Recommended)}>
          {Tabs.Recommended}
        </button>
      </div>
    </nav>
  );
}
