export default function NavBar(props) {
  return (
    <nav className="bg-primary w-full grid grid-cols-7 items-center justify-between h-12">
      <div className="col-span-1">
        <header>
          <h1 className="font-bold text-secondary text-center">Movie App</h1>
        </header>
      </div>

      <div className="flex flex-row items-center col-span-3 justify-center">
        {props.children}
      </div>

      <div className="flex flex-row gap-20 col-span-3 justify-center text-secondary">
        <button className="hover:underline-offset-[17px] hover:underline">
          Favourites
        </button>
        <button className="hover:underline-offset-[17px] hover:underline">
          Recommended
        </button>
      </div>
    </nav>
  );
}
