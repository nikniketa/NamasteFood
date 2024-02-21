import { useParams } from "react-router-dom";
import useResData from "../utils/useResdata";
import { IoMdStar } from "react-icons/io";
import { TbBike } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useResData(resId);

  if (resData === null) {
    return "Loading";
  }
  const {
    name,
    cuisines,
    avgRatingString,
    locality,
    sla,
    totalRatingsString,
    feeDetails,
    costForTwoMessage,
  } = resData?.data?.cards[2]?.card?.card?.info;
  const data =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="max-w-[800px] m-auto">
      <div className="border-t border-1">
        <div className="flex justify-between mx-5 mt-10">
          <div>
            <h1 className="text-xl font-semibold text-[#282c3f]">{name}</h1>
            <h3 className="text-sm text-[#7e808c]">{cuisines.join(", ")}</h3>
            <h3 className="text-sm text-[#7e808c]">
              {locality}, {sla.lastMileTravelString}
            </h3>
          </div>
          <div className="border border-1 border-[#e9e9eb] rounded-md p-2 grid grid-flow-row">
            <div className="text-sm font-bold text-[#3d9b6d] border-b border-b-1 border-[#e9e9eb]">
              <IoMdStar className="float-left text-base" />
              {avgRatingString}
            </div>
            <div className="text-xs font-semibold text-[#8b8d97] pt-1">
              {totalRatingsString}
            </div>
          </div>
        </div>
        <div className="mx-5 text-[#7e808c] mt-4 text-sm">
          <TbBike className="float-left mt-1 mr-1 " />
          {feeDetails.message}
        </div>
        <div className="text-base font-bold text-[#3e4152] mx-5 mt-3 pt-3 border-t border-dashed">
          <RxLapTimer className="float-left text-base font-bold text-[#3e4152] mt-1 mr-1" />
          <span className="float-left">{sla.slaString}</span>{" "}
          <HiOutlineCurrencyRupee className="float-left text-base font-bold text-[#3e4152] mt-1 ml-3 mr-1" />
          <span className="float-left">{costForTwoMessage}</span>
        </div>
      </div>
      <MenuCategory data={data} />
    </div>
  );
};
export default RestaurantMenu;
