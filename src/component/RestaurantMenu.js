import { useParams } from "react-router-dom";
import useResData from "../utils/useResdata";
import { IoMdStar } from "react-icons/io";
import { TbBike } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { BiRupee } from "react-icons/bi";
import { PRODUCT_IMG } from "../utils/constants";

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
  const { itemCards, title } =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  if (!itemCards) {
    {
      console.log(itemCards);
    }
    {
      console.log(resData);
    }
    return "Loading";
  }
  return (
    <div className="max-w-[800px] m-auto">
      <div className="border-t border-1">
        <div className="flex justify-between mx-5 mt-10">
          <div>
            {console.log(itemCards)}
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
      <div className="float-left w-full mt-5">
        <h2>
          {title}({itemCards.length})
        </h2>
        <ul>
          {itemCards.map((dish) => {
            return (
              <li key={dish?.card?.info?.id}>
                <div className="flex justify-between my-5 border-b p-5">
                  <div className="text-xl font-medium text-[#3e4152]">
                    {dish?.card?.info?.name}
                    <div className="text-base font-normal text-[#3e4152]">
                      <span>
                        <BiRupee className="float-left mt-1" />
                        {dish?.card?.info?.price / 100}
                      </span>
                    </div>
                    <p className="text-base text-[rgba(40,44,63,.45)] font-light leading-snug mt-4">
                      {dish?.card?.info?.description}
                    </p>
                  </div>
                  <div>
                    <img
                      src={PRODUCT_IMG + dish?.card?.info?.imageId}
                      className="h-24"
                    />
                    <button className="bg-white text-[#60b246] cursor-pointer border border-[d4d5d9] text-sm font-semibold leading-8 rounded-md shadow-md w-24">
                      ADD
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
