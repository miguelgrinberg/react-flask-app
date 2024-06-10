import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function FavouriteIcon(props) {
  return props.isFavourite ? (
    <IoHeart size="30px" color="red" />
  ) : (
    <IoHeartOutline
      size="30px"
      color="red"
      className="opacity-75 hover:opacity-100"
    />
  );
}
