import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { LOGO_IMG, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchResDetail();
  }, []);

  const fetchResDetail = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setResData(data);
  };
  if (resData === null) {
    return "Loading";
  }
  const { name, cuisines, avgRatingString } =
    resData?.data?.cards[0]?.card?.card?.info;
  return (
    <div>
      {console.log(resData)}
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {avgRatingString}
      </h3>
    </div>
  );
};
export default RestaurantMenu;
