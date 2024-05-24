import { IoStar, IoStarOutline } from "react-icons/io5";

export default function FavouriteIcon(props) {
  return props.isFavourite ? (
    <IoStar size="30px" color="gold" />
  ) : (
    <IoStarOutline
      size="30px"
      color="gold"
      className="opacity-75 hover:opacity-100"
    />
  );
}
