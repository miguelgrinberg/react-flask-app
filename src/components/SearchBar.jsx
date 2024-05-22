import { IoMdSearch } from "react-icons/io";

export default function SearchBar(props) {
  return (
    <>
      <IoMdSearch size={"25px"} color={"white"} />
      <input
        onChange={(e) => {
          props.setSearchValue(e.target.value);
          console.log(e.target.value);
        }} // TODO: Remove console.log
        type="search"
        className="focus:outline-none focus:caret-secondary w-[60%] bg-primary text-secondary placeholder:text-secondary"
        placeholder="Search Movie"
      />
    </>
  );
}
