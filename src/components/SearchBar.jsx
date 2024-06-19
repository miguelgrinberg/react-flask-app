import { IoMdSearch } from "react-icons/io";

export default function SearchBar(props) {
  return (
    <>
      <IoMdSearch size={"25px"} color={"white"} />
      <input
        onChange={(e) => props.setSearch(e.target.value)}
        type="search"
        value={props.search}
        className="w-[60%] bg-primary text-secondary placeholder:text-secondary focus:caret-secondary focus:outline-none"
        placeholder="Search Movie"
      />
    </>
  );
}
